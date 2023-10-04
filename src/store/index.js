import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inputValue: "",
    employees: [],
    activeEmployeeId: null,
    // Задержка выполнения запроса
    requestTimer: {
      id: null,
      delay: 750,
    },
    // Задержка прелоадера
    loader: {
      duration: 750,
      start: null,
      loading: false,
    },
    errorStatus: null,
  },
  getters: {
    queryUserNames: (state) => {
      let queryUserNames = "";
      if (state.inputValue) {
        let userNames = state.inputValue.split(",");
        userNames.forEach((username) => {
          if (username) {
            username =
              username.trim()[0].toUpperCase() +
              username.trim().toLowerCase().substr(1);
            queryUserNames += `&username=${username}`;
          }
        });
        queryUserNames = queryUserNames.substr(1);
      }
      return queryUserNames;
    },
    searchResultText: (state) => {
      if (!state.inputValue) {
        return "Начните поиск";
      } else if (state.requestTimer.id) {
        return "Ожидание завершения печати";
      } else if (!state.errorStatus) {
        return "Ничего не найдено";
      } else {
        return "Ошибка запроса. Код статуса ошибки - " + state.errorStatus;
      }
    },
  },
  mutations: {
    setInputValue(state, value) {
      state.inputValue = value;
    },
    resetRequestTimerId(state, timerId) {
      clearTimeout(state.requestTimer.id);
      state.requestTimer.id = timerId;
    },
    resetLoaderTimerId(state, timerId) {
      clearTimeout(state.loaderTimer.id);
      state.loaderTimer.id = timerId;
    },
    setLoading(state, loadingMode) {
      if (loadingMode) {
        state.loader.start = Date.now();
      }
      state.loader.loading = loadingMode;
    },
    setEmployees(state, loadedUsers) {
      state.employees = loadedUsers;
    },
    setErrorStatus(state, status) {
      state.errorStatus = status;
    },
    setActiveEmployeeId(state, id) {
      state.activeEmployeeId = id;
    },
  },
  actions: {
    changeInput({ state, commit, dispatch }, value) {
      commit("setInputValue", value);
      if (value) {
        let timerId = setTimeout(() => {
          dispatch("getUsers");
        }, state.requestTimer.delay);
        commit("resetRequestTimerId", timerId);
      } else {
        commit("setEmployees", []);
      }
    },
    async getUsers({ getters, commit, dispatch }) {
      commit("setLoading", true);
      await fetch(
        "https://jsonplaceholder.typicode.com/users?" + getters.queryUserNames
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            commit("setErrorStatus", response.status);
          }
        })
        .then((json) => {
          if (json) {
            commit("setErrorStatus", null);
            commit("setEmployees", json);
          }
        })
        .finally(() => {
          commit("resetRequestTimerId", null);
          dispatch("loaderFinish");
        });
    },
    loaderFinish({ state, commit }) {
      let requestTime = Date.now() - state.loader.start;
      if (requestTime < state.loader.duration) {
        setTimeout(() => {
          commit("setLoading", false);
        }, state.loader.duration - requestTime);
      } else {
        commit("setLoading", false);
      }
    },
  },
  modules: {},
});
