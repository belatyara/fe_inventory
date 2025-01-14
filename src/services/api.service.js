import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

/**
 * Service to call HTTP request via Axios
 */
// const BASE_URL = "http://localhost:8000";
const ApiService = {
  init() {
    Vue.use(VueAxios, axios);

    this.setHeader();
  },

  /**
   * Set the default HTTP request headers
   *
   */
  setHeader() {
    Vue.axios.defaults.baseURL = "http://localhost/be_inventory/index.php";
    //TODO:: because back end doesnt need auth header it will ignored and cause CORS issue
    // Vue.axios.defaults.headers.common[
    //   "Authorization"
    // ] = `Bearer ${JwtService.getToken()}`;
  },
  query(resource, params) {
    return Vue.axios.get(resource, params);
  },
  /**
   * Send the GET HTTP request
   * return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      // console.log(error);
      throw new Error(`[KT] ApiService ${error}`);
    });
   * @param resource
   * @param slug
   * @returns {*}
   */
  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`);
  },

  /**
   * Set the POST HTTP request
   *  return fetch(`http://localhost:8000/${resource}`, {
   *    method: "POST",
   *   body: JSON.stringify(params),
   *   headers: { "Content-Type": "application/json" },
   *   mode: "no-cors",
   * }).then((res) => {
   *  res.json();
   *});
   * @param resource
   * @param params
   * @returns {*}
   */
  post(resource, params) {
    return Vue.axios.post(`${resource}`, params, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  /**
   * Send the UPDATE HTTP request
   * @param resource
   * @param slug
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  /**
   * Send the PUT HTTP request
   * @param resource
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  /**
   * Send the DELETE HTTP request
   * @param resource
   * @returns {*}
   */
  delete(resource) {
    return Vue.axios.delete(resource);
  },
  /**
   * get wilayah service
   */
};

export default ApiService;
