import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core'
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'activecampaign/unknown (api/6.1.2)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * Create a new e-commerce order resource.
   *
   * @summary Create an order
   */
  createOrder(body?: types.CreateOrderBodyParam): Promise<FetchResponse<201, types.CreateOrderResponse201>> {
    return this.core.fetch('/ecomOrders', 'post', body);
  }

  /**
   * List all existing e-commerce order resources.
   *
   * @summary List all orders
   * @throws FetchError<422, types.ListAllOrdersResponse422> 422
   */
  listAllOrders(metadata?: types.ListAllOrdersMetadataParam): Promise<FetchResponse<200, types.ListAllOrdersResponse200>> {
    return this.core.fetch('/ecomOrders', 'get', metadata);
  }

  /**
   * Create a new webhook
   *
   * @summary Create a webhook
   */
  createWebhook(body?: types.CreateWebhookBodyParam): Promise<FetchResponse<201, types.CreateWebhookResponse201>> {
    return this.core.fetch('/webhooks', 'post', body);
  }

  /**
   * List all existing webhooks
   *
   * @summary List all webhooks
   * @throws FetchError<400, types.GetAListOfWebhooksResponse400> 400
   */
  getAListOfWebhooks(metadata?: types.GetAListOfWebhooksMetadataParam): Promise<FetchResponse<200, types.GetAListOfWebhooksResponse200>> {
    return this.core.fetch('/webhooks', 'get', metadata);
  }

  /**
   * Retrieve an existing e-commerce order resource.
   *
   * @summary Retrieve an order
   */
  getOrder(metadata: types.GetOrderMetadataParam): Promise<FetchResponse<200, types.GetOrderResponse200>> {
    return this.core.fetch('/ecomOrders/{ecomOrderId}', 'get', metadata);
  }

  /**
   * Delete an existing e-commerce order resource.
   *
   * @summary Delete an order
   */
  deleteOrder(metadata: types.DeleteOrderMetadataParam): Promise<FetchResponse<200, types.DeleteOrderResponse200>> {
    return this.core.fetch('/ecomOrders/{ecomOrderId}', 'delete', metadata);
  }

  /**
   * Retrieve an existing connection resource.
   *
   * @summary Retrieve a connection
   * @throws FetchError<400, types.GetConnectionResponse400> 400
   */
  getConnection(metadata: types.GetConnectionMetadataParam): Promise<FetchResponse<200, types.GetConnectionResponse200>> {
    return this.core.fetch('/connections/{id}', 'get', metadata);
  }

  /**
   * Delete an existing connection resource.
   *
   * @summary Delete a connection
   * @throws FetchError<400, types.DeleteConnectionResponse400> 400
   */
  deleteConnection(metadata: types.DeleteConnectionMetadataParam): Promise<FetchResponse<200, types.DeleteConnectionResponse200>> {
    return this.core.fetch('/connections/{id}', 'delete', metadata);
  }

  /**
   * Update an existing connection resource.
   *
   * @summary Update a connection
   * @throws FetchError<400, types.UpdateConnectionResponse400> 400
   */
  updateConnection(body: types.UpdateConnectionBodyParam, metadata: types.UpdateConnectionMetadataParam): Promise<FetchResponse<200, types.UpdateConnectionResponse200>>;
  updateConnection(metadata: types.UpdateConnectionMetadataParam): Promise<FetchResponse<200, types.UpdateConnectionResponse200>>;
  updateConnection(body?: types.UpdateConnectionBodyParam | types.UpdateConnectionMetadataParam, metadata?: types.UpdateConnectionMetadataParam): Promise<FetchResponse<200, types.UpdateConnectionResponse200>> {
    return this.core.fetch('/connections/{id}', 'put', body, metadata);
  }

  /**
   * Update an existing e-commerce customer resource.
   *
   * @summary Update a customer
   */
  updateCustomer(body: types.UpdateCustomerBodyParam, metadata: types.UpdateCustomerMetadataParam): Promise<FetchResponse<200, types.UpdateCustomerResponse200>>;
  updateCustomer(metadata: types.UpdateCustomerMetadataParam): Promise<FetchResponse<200, types.UpdateCustomerResponse200>>;
  updateCustomer(body?: types.UpdateCustomerBodyParam | types.UpdateCustomerMetadataParam, metadata?: types.UpdateCustomerMetadataParam): Promise<FetchResponse<200, types.UpdateCustomerResponse200>> {
    return this.core.fetch('/ecomCustomers/{id}', 'put', body, metadata);
  }

  /**
   * Retrieve an existing e-commerce customer resource.
   *
   * @summary Retrieve a customer
   * @throws FetchError<400, types.GetCustomerResponse400> 400
   */
  getCustomer(metadata: types.GetCustomerMetadataParam): Promise<FetchResponse<200, types.GetCustomerResponse200>> {
    return this.core.fetch('/ecomCustomers/{id}', 'get', metadata);
  }

  /**
   * Delete an existing e-commerce customer resource.
   *
   * @summary Delete a customer
   * @throws FetchError<400, types.DeleteCustomerResponse400> 400
   */
  deleteCustomer(metadata: types.DeleteCustomerMetadataParam): Promise<FetchResponse<200, types.DeleteCustomerResponse200>> {
    return this.core.fetch('/ecomCustomers/{id}', 'delete', metadata);
  }

  /**
   * List all e-commerce customer resources.
   *
   * @summary List all customers
   */
  listAllCustomers(metadata?: types.ListAllCustomersMetadataParam): Promise<FetchResponse<200, types.ListAllCustomersResponse200>> {
    return this.core.fetch('/ecomCustomers', 'get', metadata);
  }

  /**
   * Create a new e-commerce customer resource.
   *
   * @summary Create a customer
   * @throws FetchError<400, types.CreateCustomerResponse400> 400
   */
  createCustomer(body?: types.CreateCustomerBodyParam): Promise<FetchResponse<201, types.CreateCustomerResponse201>> {
    return this.core.fetch('/ecomCustomers', 'post', body);
  }

  /**
   * List all available webhook events
   *
   * @summary List all webhook events
   */
  getAListOfWebhookEvents(): Promise<FetchResponse<200, types.GetAListOfWebhookEventsResponse200>> {
    return this.core.fetch('/webhook/events', 'get');
  }

  /**
   * Retrieve an existing webhook
   *
   * @summary Retrieve a webhook
   */
  getWebhook(metadata: types.GetWebhookMetadataParam): Promise<FetchResponse<200, types.GetWebhookResponse200>> {
    return this.core.fetch('/webhooks/{id}', 'get', metadata);
  }

  /**
   * Update an existing webhook
   *
   * @summary Update a webhook
   * @throws FetchError<400, types.UpdateWebhookResponse400> 400
   */
  updateWebhook(body: types.UpdateWebhookBodyParam, metadata: types.UpdateWebhookMetadataParam): Promise<FetchResponse<200, types.UpdateWebhookResponse200>>;
  updateWebhook(metadata: types.UpdateWebhookMetadataParam): Promise<FetchResponse<200, types.UpdateWebhookResponse200>>;
  updateWebhook(body?: types.UpdateWebhookBodyParam | types.UpdateWebhookMetadataParam, metadata?: types.UpdateWebhookMetadataParam): Promise<FetchResponse<200, types.UpdateWebhookResponse200>> {
    return this.core.fetch('/webhooks/{id}', 'put', body, metadata);
  }

  /**
   * Delete an existing webhook
   *
   * @summary Delete a webhook
   */
  deleteWebhook(metadata: types.DeleteWebhookMetadataParam): Promise<FetchResponse<200, types.DeleteWebhookResponse200>> {
    return this.core.fetch('/webhooks/{id}', 'delete', metadata);
  }

  /**
   * List all existing connection resources.
   *
   * @summary List all connections
   * @throws FetchError<400, types.ListAllConnectionsResponse400> 400
   */
  listAllConnections(metadata?: types.ListAllConnectionsMetadataParam): Promise<FetchResponse<200, types.ListAllConnectionsResponse200>> {
    return this.core.fetch('/connections', 'get', metadata);
  }

  /**
   * Create a new connection resource.
   *
   * @summary Create a connection
   */
  createConnection(body?: types.CreateConnectionBodyParam): Promise<FetchResponse<200, types.CreateConnectionResponse200>> {
    return this.core.fetch('/connections', 'post', body);
  }

  /**
   * Retrieve an existing branding resource
   *
   * @summary Retrieve a branding
   * @throws FetchError<400, types.GetBrandingResponse400> 400
   */
  getBranding(metadata: types.GetBrandingMetadataParam): Promise<FetchResponse<200, types.GetBrandingResponse200>> {
    return this.core.fetch('/brandings/{id}', 'get', metadata);
  }

  /**
   * Update an existing branding resource
   *
   * @summary Update a branding
   * @throws FetchError<400, types.UpdateBrandingResponse400> 400
   */
  updateBranding(body: types.UpdateBrandingBodyParam, metadata: types.UpdateBrandingMetadataParam): Promise<FetchResponse<200, types.UpdateBrandingResponse200>>;
  updateBranding(metadata: types.UpdateBrandingMetadataParam): Promise<FetchResponse<200, types.UpdateBrandingResponse200>>;
  updateBranding(body?: types.UpdateBrandingBodyParam | types.UpdateBrandingMetadataParam, metadata?: types.UpdateBrandingMetadataParam): Promise<FetchResponse<200, types.UpdateBrandingResponse200>> {
    return this.core.fetch('/brandings/{id}', 'put', body, metadata);
  }

  /**
   * List all existing branding resources
   *
   * @summary List all brandings
   * @throws FetchError<400, types.BrandingsResponse400> 400
   */
  brandings(metadata?: types.BrandingsMetadataParam): Promise<FetchResponse<200, types.BrandingsResponse200>> {
    return this.core.fetch('/brandings', 'get', metadata);
  }

  /**
   * List all existing users
   *
   * @summary List all users
   * @throws FetchError<400, types.ListAllUsersResponse400> 400
   */
  listAllUsers(): Promise<FetchResponse<200, types.ListAllUsersResponse200>> {
    return this.core.fetch('/users', 'get');
  }

  /**
   * Create a new user
   *
   * @summary Create a user
   * @throws FetchError<400, types.CreateUserResponse400> 400
   */
  createUser(body?: types.CreateUserBodyParam): Promise<FetchResponse<201, types.CreateUserResponse201>> {
    return this.core.fetch('/users', 'post', body);
  }

  /**
   * Delete an existing user
   *
   * @summary Delete a user
   * @throws FetchError<400, types.DeleteUserResponse400> 400
   */
  deleteUser(metadata: types.DeleteUserMetadataParam): Promise<FetchResponse<200, types.DeleteUserResponse200>> {
    return this.core.fetch('/users/{id}', 'delete', metadata);
  }

  /**
   * Update an existing user
   *
   * @summary Update a user
   * @throws FetchError<400, types.UpdateUserResponse400> 400
   */
  updateUser(body: types.UpdateUserBodyParam, metadata: types.UpdateUserMetadataParam): Promise<FetchResponse<200, types.UpdateUserResponse200>>;
  updateUser(metadata: types.UpdateUserMetadataParam): Promise<FetchResponse<200, types.UpdateUserResponse200>>;
  updateUser(body?: types.UpdateUserBodyParam | types.UpdateUserMetadataParam, metadata?: types.UpdateUserMetadataParam): Promise<FetchResponse<200, types.UpdateUserResponse200>> {
    return this.core.fetch('/users/{id}', 'put', body, metadata);
  }

  /**
   * Retrieve an existing user
   *
   * @summary Retrieve a user
   * @throws FetchError<400, types.GetUserResponse400> 400
   */
  getUser(metadata: types.GetUserMetadataParam): Promise<FetchResponse<200, types.GetUserResponse200>> {
    return this.core.fetch('/users/{id}', 'get', metadata);
  }

  /**
   * Retrieve an existing user by looking up their email address
   *
   * @summary Retrieve a user by email
   * @throws FetchError<400, types.GetUserEmailResponse400> 400
   */
  getUserEmail(metadata: types.GetUserEmailMetadataParam): Promise<FetchResponse<200, types.GetUserEmailResponse200>> {
    return this.core.fetch('/users/email/{email}', 'get', metadata);
  }

  /**
   * Retrieve an existing user by looking up their username
   *
   * @summary Retrieve a user by username
   * @throws FetchError<400, types.GetUserUsernameResponse400> 400
   */
  getUserUsername(metadata: types.GetUserUsernameMetadataParam): Promise<FetchResponse<200, types.GetUserUsernameResponse200>> {
    return this.core.fetch('/users/username/{username}', 'get', metadata);
  }

  /**
   * Retrieve the logged-in user
   *
   * @summary Retrieve logged-in user
   * @throws FetchError<400, types.GetUserLoggedinResponse400> 400
   */
  getUserLoggedin(): Promise<FetchResponse<200, types.GetUserLoggedinResponse200>> {
    return this.core.fetch('/users/me', 'get');
  }

  /**
   * Create a new task
   *
   * @summary Create a task
   * @throws FetchError<400, types.CreateTaskResponse400> 400
   */
  createTask(body?: types.CreateTaskBodyParam): Promise<FetchResponse<201, types.CreateTaskResponse201>> {
    return this.core.fetch('/dealTasks', 'post', body);
  }

  /**
   * Retrieve a list of existing tasks
   *
   * @summary List all tasks
   * @throws FetchError<400, types.ListAllTasksResponse400> 400
   */
  listAllTasks(metadata?: types.ListAllTasksMetadataParam): Promise<FetchResponse<201, types.ListAllTasksResponse201>> {
    return this.core.fetch('/dealTasks', 'get', metadata);
  }

  /**
   * Retrieve an existing task
   *
   * @summary Retrieve a task
   * @throws FetchError<400, types.GetTaskResponse400> 400
   */
  getTask(metadata: types.GetTaskMetadataParam): Promise<FetchResponse<201, types.GetTaskResponse201>> {
    return this.core.fetch('/dealTasks/{id}', 'get', metadata);
  }

  /**
   * Delete an existing task
   *
   * @summary Delete a task
   * @throws FetchError<400, types.DeleteTaskResponse400> 400
   */
  deleteTask(metadata: types.DeleteTaskMetadataParam): Promise<FetchResponse<200, types.DeleteTaskResponse200>> {
    return this.core.fetch('/dealTasks/{id}', 'delete', metadata);
  }

  /**
   * Update an existing task
   *
   * @summary Update a task
   * @throws FetchError<400, types.UpdateTaskResponse400> 400
   */
  updateTask(body: types.UpdateTaskBodyParam, metadata: types.UpdateTaskMetadataParam): Promise<FetchResponse<201, types.UpdateTaskResponse201>>;
  updateTask(metadata: types.UpdateTaskMetadataParam): Promise<FetchResponse<201, types.UpdateTaskResponse201>>;
  updateTask(body?: types.UpdateTaskBodyParam | types.UpdateTaskMetadataParam, metadata?: types.UpdateTaskMetadataParam): Promise<FetchResponse<201, types.UpdateTaskResponse201>> {
    return this.core.fetch('/dealTasks/{id}', 'put', body, metadata);
  }

  /**
   * Delete an existing deal
   *
   * @summary Delete a deal
   * @throws FetchError<400, types.DeleteADealResponse400> 400
   */
  deleteADeal(metadata: types.DeleteADealMetadataParam): Promise<FetchResponse<200, types.DeleteADealResponse200>> {
    return this.core.fetch('/deals/{id}', 'delete', metadata);
  }

  /**
   * Retrieve an existing deal
   *
   * @summary Retrieve a deal
   */
  retrieveADeal(metadata: types.RetrieveADealMetadataParam): Promise<FetchResponse<200, types.RetrieveADealResponse200>> {
    return this.core.fetch('/deals/{id}', 'get', metadata);
  }

  /**
   * Update an existing deal
   *
   * @summary Update a deal
   * @throws FetchError<400, types.UpdateADealNewResponse400> 400
   */
  updateADealNew(body: types.UpdateADealNewBodyParam, metadata: types.UpdateADealNewMetadataParam): Promise<FetchResponse<200, types.UpdateADealNewResponse200>>;
  updateADealNew(metadata: types.UpdateADealNewMetadataParam): Promise<FetchResponse<200, types.UpdateADealNewResponse200>>;
  updateADealNew(body?: types.UpdateADealNewBodyParam | types.UpdateADealNewMetadataParam, metadata?: types.UpdateADealNewMetadataParam): Promise<FetchResponse<200, types.UpdateADealNewResponse200>> {
    return this.core.fetch('/deals/{id}', 'put', body, metadata);
  }

  /**
   * Retrieve all existing deals
   *
   * @summary List all deals
   * @throws FetchError<400, types.ListAllDealsResponse400> 400
   */
  listAllDeals(metadata?: types.ListAllDealsMetadataParam): Promise<FetchResponse<200, types.ListAllDealsResponse200>> {
    return this.core.fetch('/deals', 'get', metadata);
  }

  /**
   * Create a new deal
   *
   * @summary Create a deal
   * @throws FetchError<400, types.CreateADealNewResponse400> 400
   */
  createADealNew(body?: types.CreateADealNewBodyParam): Promise<FetchResponse<201, types.CreateADealNewResponse201>> {
    return this.core.fetch('/deals', 'post', body);
  }

  /**
   * Retrieve all existing stages
   *
   * @summary List all stages
   * @throws FetchError<400, types.ListAllDealStagesResponse400> 400
   */
  listAllDealStages(metadata?: types.ListAllDealStagesMetadataParam): Promise<FetchResponse<200, types.ListAllDealStagesResponse200>> {
    return this.core.fetch('/dealStages', 'get', metadata);
  }

  /**
   * Create a new stage for a pipeline
   *
   * @summary Create a stage
   * @throws FetchError<400, types.CreateADealStageResponse400> 400
   */
  createADealStage(body?: types.CreateADealStageBodyParam, metadata?: types.CreateADealStageMetadataParam): Promise<FetchResponse<200, types.CreateADealStageResponse200>> {
    return this.core.fetch('/dealStages', 'post', body, metadata);
  }

  /**
   * Delete an existing pipeline
   *
   * @summary Delete a pipeline
   */
  deleteAPipeline(metadata: types.DeleteAPipelineMetadataParam): Promise<FetchResponse<200, types.DeleteAPipelineResponse200>> {
    return this.core.fetch('/dealGroups/{id}', 'delete', metadata);
  }

  /**
   * Retrieve an existing pipeline
   *
   * @summary Retrieve a pipeline
   * @throws FetchError<400, types.RetrieveAPipelineResponse400> 400
   */
  retrieveAPipeline(metadata: types.RetrieveAPipelineMetadataParam): Promise<FetchResponse<200, types.RetrieveAPipelineResponse200>> {
    return this.core.fetch('/dealGroups/{id}', 'get', metadata);
  }

  /**
   * Update an existing pipeline
   *
   * @summary Update a pipeline
   * @throws FetchError<400, types.UpdateAPipelineResponse400> 400
   */
  updateAPipeline(body: types.UpdateAPipelineBodyParam, metadata: types.UpdateAPipelineMetadataParam): Promise<FetchResponse<200, types.UpdateAPipelineResponse200>>;
  updateAPipeline(metadata: types.UpdateAPipelineMetadataParam): Promise<FetchResponse<200, types.UpdateAPipelineResponse200>>;
  updateAPipeline(body?: types.UpdateAPipelineBodyParam | types.UpdateAPipelineMetadataParam, metadata?: types.UpdateAPipelineMetadataParam): Promise<FetchResponse<200, types.UpdateAPipelineResponse200>> {
    return this.core.fetch('/dealGroups/{id}', 'put', body, metadata);
  }

  /**
   * Create a new pipeline
   *
   * @summary Create a pipeline
   * @throws FetchError<400, types.CreateAPipelineResponse400> 400
   */
  createAPipeline(body?: types.CreateAPipelineBodyParam): Promise<FetchResponse<200, types.CreateAPipelineResponse200>> {
    return this.core.fetch('/dealGroups', 'post', body);
  }

  /**
   * Retrieve all existing pipelines
   *
   * @summary List all pipelines
   * @throws FetchError<400, types.ListAllPipelinesResponse400> 400
   */
  listAllPipelines(metadata?: types.ListAllPipelinesMetadataParam): Promise<FetchResponse<200, types.ListAllPipelinesResponse200>> {
    return this.core.fetch('/dealGroups', 'get', metadata);
  }

  /**
   * Delete an existing stage
   *
   * @summary Delete a stage
   */
  deleteADealStage(metadata: types.DeleteADealStageMetadataParam): Promise<FetchResponse<200, types.DeleteADealStageResponse200>> {
    return this.core.fetch('/dealStages/{id}', 'delete', metadata);
  }

  /**
   * Update an existing stage
   *
   * @summary Update a stage
   * @throws FetchError<400, types.UpdateADealStageResponse400> 400
   */
  updateADealStage(body: types.UpdateADealStageBodyParam, metadata: types.UpdateADealStageMetadataParam): Promise<FetchResponse<200, types.UpdateADealStageResponse200>>;
  updateADealStage(metadata: types.UpdateADealStageMetadataParam): Promise<FetchResponse<200, types.UpdateADealStageResponse200>>;
  updateADealStage(body?: types.UpdateADealStageBodyParam | types.UpdateADealStageMetadataParam, metadata?: types.UpdateADealStageMetadataParam): Promise<FetchResponse<200, types.UpdateADealStageResponse200>> {
    return this.core.fetch('/dealStages/{id}', 'put', body, metadata);
  }

  /**
   * Retrieve an existing stage
   *
   * @summary Retrieve a stage
   * @throws FetchError<400, types.RetrieveADealStageResponse400> 400
   */
  retrieveADealStage(metadata: types.RetrieveADealStageMetadataParam): Promise<FetchResponse<200, types.RetrieveADealStageResponse200>> {
    return this.core.fetch('/dealStages/{id}', 'get', metadata);
  }

  /**
   * Retrieve all existing task types
   *
   * @summary List all task types
   * @throws FetchError<400, types.ListAllDealTaskTypesResponse400> 400
   */
  listAllDealTaskTypes(): Promise<FetchResponse<200, types.ListAllDealTaskTypesResponse200>> {
    return this.core.fetch('/dealTasktypes', 'get');
  }

  /**
   * Create a new task type
   *
   * @summary Create a task type
   * @throws FetchError<400, types.CreateADealTaskTypeResponse400> 400
   */
  createADealTaskType(body?: types.CreateADealTaskTypeBodyParam): Promise<FetchResponse<200, types.CreateADealTaskTypeResponse200>> {
    return this.core.fetch('/dealTasktypes', 'post', body);
  }

  /**
   * Retrieve an existing task type
   *
   * @summary Retrieve a task type
   * @throws FetchError<400, types.RetrieveADealTaskTypeResponse400> 400
   */
  retrieveADealTaskType(metadata: types.RetrieveADealTaskTypeMetadataParam): Promise<FetchResponse<200, types.RetrieveADealTaskTypeResponse200>> {
    return this.core.fetch('/dealTasktypes/{id}', 'get', metadata);
  }

  /**
   * Delete an existing task type
   *
   * @summary Delete a task type
   * @throws FetchError<403, types.DeleteADealTaskTypeResponse403> 403
   */
  deleteADealTaskType(metadata: types.DeleteADealTaskTypeMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/dealTasktypes/{id}', 'delete', metadata);
  }

  /**
   * Update an existing task type
   *
   * @summary Update a task type
   * @throws FetchError<400, types.UpdateADealTaskTypeResponse400> 400
   */
  updateADealTaskType(body: types.UpdateADealTaskTypeBodyParam, metadata: types.UpdateADealTaskTypeMetadataParam): Promise<FetchResponse<200, types.UpdateADealTaskTypeResponse200>>;
  updateADealTaskType(metadata: types.UpdateADealTaskTypeMetadataParam): Promise<FetchResponse<200, types.UpdateADealTaskTypeResponse200>>;
  updateADealTaskType(body?: types.UpdateADealTaskTypeBodyParam | types.UpdateADealTaskTypeMetadataParam, metadata?: types.UpdateADealTaskTypeMetadataParam): Promise<FetchResponse<200, types.UpdateADealTaskTypeResponse200>> {
    return this.core.fetch('/dealTasktypes/{id}', 'put', body, metadata);
  }

  /**
   * List the names of tracked events
   *
   * @summary List all events (names only)
   * @throws FetchError<400, types.ListAllEventTypesResponse400> 400
   */
  listAllEventTypes(): Promise<FetchResponse<200, types.ListAllEventTypesResponse200>> {
    return this.core.fetch('/eventTrackingEvents', 'get');
  }

  /**
   * Create a new event tracking event (name only)
   *
   * @summary Create a new event (name only)
   */
  createANewEventNameOnly(body?: types.CreateANewEventNameOnlyBodyParam): Promise<FetchResponse<201, types.CreateANewEventNameOnlyResponse201>> {
    return this.core.fetch('/eventTrackingEvents', 'post', body);
  }

  /**
   * Get event tracking status (enabled or disabled)
   *
   * @summary Retrieve Event Tracking Status
   */
  retrieveEventTrackingStatus(): Promise<FetchResponse<200, types.RetrieveEventTrackingStatusResponse200>> {
    return this.core.fetch('/eventTracking', 'get');
  }

  /**
   * Enable or disable event tracking
   *
   * @summary Enable/disable
   * @throws FetchError<400, types.EnableDisableEventTrackingResponse400> 400
   */
  enableDisableEventTracking(body?: types.EnableDisableEventTrackingBodyParam): Promise<FetchResponse<200, types.EnableDisableEventTrackingResponse200>> {
    return this.core.fetch('/eventTracking', 'put', body);
  }

  /**
   * Use this API endpoint to list all contacts, search contacts, or filter contacts by many
   * criteria. For example, search for specific contacts by email, list, account.
   *
   * @summary List, search, and filter contacts
   * @throws FetchError<400, types.ListAllContactsResponse400> 400
   */
  listAllContacts(metadata?: types.ListAllContactsMetadataParam): Promise<FetchResponse<200, types.ListAllContactsResponse200>> {
    return this.core.fetch('/contacts', 'get', metadata);
  }

  /**
   * Create a contact
   *
   * @throws FetchError<404, types.CreateANewContactResponse404> 404
   * @throws FetchError<422, types.CreateANewContactResponse422> 422
   */
  createANewContact(body?: types.CreateANewContactBodyParam): Promise<FetchResponse<201, types.CreateANewContactResponse201>> {
    return this.core.fetch('/contacts', 'post', body);
  }

  /**
   * Remove an existing event tracking event (name only)
   *
   * @summary Delete event (name only)
   * @throws FetchError<400, types.RemoveEventNameOnlyResponse400> 400
   */
  removeEventNameOnly(metadata: types.RemoveEventNameOnlyMetadataParam): Promise<FetchResponse<200, types.RemoveEventNameOnlyResponse200>> {
    return this.core.fetch('/eventTrackingEvents/{eventName}', 'delete', metadata);
  }

  /**
   * Get site tracking status (enabled or disabled)
   *
   * @summary Retrieve status
   * @throws FetchError<400, types.RetrieveSiteTrackingStatusResponse400> 400
   */
  retrieveSiteTrackingStatus(): Promise<FetchResponse<200, types.RetrieveSiteTrackingStatusResponse200>> {
    return this.core.fetch('/siteTracking', 'get');
  }

  /**
   * Enable or disable site tracking
   *
   * @summary Enable/disable
   * @throws FetchError<400, types.EnableDisableSiteTrackingResponse400> 400
   */
  enableDisableSiteTracking(body?: types.EnableDisableSiteTrackingBodyParam): Promise<FetchResponse<200, types.EnableDisableSiteTrackingResponse200>> {
    return this.core.fetch('/siteTracking', 'put', body);
  }

  /**
   * List of all whitelisted site tracking domains
   *
   * @summary List all whitelisted domains
   */
  listAllWhitelistedDomains(): Promise<FetchResponse<200, types.ListAllWhitelistedDomainsResponse200>> {
    return this.core.fetch('/siteTrackingDomains', 'get');
  }

  /**
   * Add a domain to the site tracking whitelist
   *
   * @summary Add domain to whitelist
   * @throws FetchError<400, types.AddDomainToWhitelistResponse400> 400
   */
  addDomainToWhitelist(body?: types.AddDomainToWhitelistBodyParam): Promise<FetchResponse<200, types.AddDomainToWhitelistResponse200>> {
    return this.core.fetch('/siteTrackingDomains', 'post', body);
  }

  /**
   * Remove a domain from the site tracking whitelist
   *
   * @summary Remove domain from whitelist
   */
  removeDomainFromWhitelist(metadata: types.RemoveDomainFromWhitelistMetadataParam): Promise<FetchResponse<204, types.RemoveDomainFromWhitelistResponse204>> {
    return this.core.fetch('/siteTrackingDomains/{name}', 'delete', metadata);
  }

  /**
   * Move all deals in one stage to another stage
   *
   * @summary Move deals to another stage
   * @throws FetchError<422, types.MoveDealsToAnotherDealStageResponse422> 422
   */
  moveDealsToAnotherDealStage(body: types.MoveDealsToAnotherDealStageBodyParam, metadata: types.MoveDealsToAnotherDealStageMetadataParam): Promise<FetchResponse<200, types.MoveDealsToAnotherDealStageResponse200>>;
  moveDealsToAnotherDealStage(metadata: types.MoveDealsToAnotherDealStageMetadataParam): Promise<FetchResponse<200, types.MoveDealsToAnotherDealStageResponse200>>;
  moveDealsToAnotherDealStage(body?: types.MoveDealsToAnotherDealStageBodyParam | types.MoveDealsToAnotherDealStageMetadataParam, metadata?: types.MoveDealsToAnotherDealStageMetadataParam): Promise<FetchResponse<200, types.MoveDealsToAnotherDealStageResponse200>> {
    return this.core.fetch('/dealStages/{id}/deals', 'put', body, metadata);
  }

  /**
   * Create a new note for a deal
   *
   * @summary Create a deal note
   */
  createADealNote(body: types.CreateADealNoteBodyParam, metadata: types.CreateADealNoteMetadataParam): Promise<FetchResponse<201, types.CreateADealNoteResponse201>>;
  createADealNote(metadata: types.CreateADealNoteMetadataParam): Promise<FetchResponse<201, types.CreateADealNoteResponse201>>;
  createADealNote(body?: types.CreateADealNoteBodyParam | types.CreateADealNoteMetadataParam, metadata?: types.CreateADealNoteMetadataParam): Promise<FetchResponse<201, types.CreateADealNoteResponse201>> {
    return this.core.fetch('/deals/{id}/notes', 'post', body, metadata);
  }

  /**
   * Update an existing note for a deal
   *
   * @summary Update a deal note
   */
  updateADealNote(body: types.UpdateADealNoteBodyParam, metadata: types.UpdateADealNoteMetadataParam): Promise<FetchResponse<200, types.UpdateADealNoteResponse200>>;
  updateADealNote(metadata: types.UpdateADealNoteMetadataParam): Promise<FetchResponse<200, types.UpdateADealNoteResponse200>>;
  updateADealNote(body?: types.UpdateADealNoteBodyParam | types.UpdateADealNoteMetadataParam, metadata?: types.UpdateADealNoteMetadataParam): Promise<FetchResponse<200, types.UpdateADealNoteResponse200>> {
    return this.core.fetch('/deals/{id}/notes/{noteId}', 'put', body, metadata);
  }

  /**
   * Move tasks to a different task type
   *
   * @summary Move tasks to another task type
   * @throws FetchError<400, types.MoveDealTasksToAnotherDealTaskTypeResponse400> 400
   */
  moveDealTasksToAnotherDealTaskType(body: types.MoveDealTasksToAnotherDealTaskTypeBodyParam, metadata: types.MoveDealTasksToAnotherDealTaskTypeMetadataParam): Promise<FetchResponse<200, types.MoveDealTasksToAnotherDealTaskTypeResponse200>>;
  moveDealTasksToAnotherDealTaskType(metadata: types.MoveDealTasksToAnotherDealTaskTypeMetadataParam): Promise<FetchResponse<200, types.MoveDealTasksToAnotherDealTaskTypeResponse200>>;
  moveDealTasksToAnotherDealTaskType(body?: types.MoveDealTasksToAnotherDealTaskTypeBodyParam | types.MoveDealTasksToAnotherDealTaskTypeMetadataParam, metadata?: types.MoveDealTasksToAnotherDealTaskTypeMetadataParam): Promise<FetchResponse<200, types.MoveDealTasksToAnotherDealTaskTypeResponse200>> {
    return this.core.fetch('/dealTasktypes/{id}/dealTasks', 'put', body, metadata);
  }

  /**
   * Create a contact tag object
   *
   * @summary Add a tag to contact
   * @throws FetchError<404, types.CreateContactTagResponse404> 404
   * @throws FetchError<422, types.CreateContactTagResponse422> 422
   */
  createContactTag(body?: types.CreateContactTagBodyParam): Promise<FetchResponse<201, types.CreateContactTagResponse201>> {
    return this.core.fetch('/contactTags', 'post', body);
  }

  /**
   * Delete a contact tag object
   *
   * @summary Remove a tag from a contact
   * @throws FetchError<404, types.RemoveAContactsTagResponse404> 404
   */
  removeAContactsTag(metadata: types.RemoveAContactsTagMetadataParam): Promise<FetchResponse<200, types.RemoveAContactsTagResponse200>> {
    return this.core.fetch('/contactTags/{id}', 'delete', metadata);
  }

  /**
   * Retrieve an existing contact
   *
   * @summary Retrieve a contact
   * @throws FetchError<404, types.GetContactResponse404> 404
   */
  getContact(metadata: types.GetContactMetadataParam): Promise<FetchResponse<200, types.GetContactResponse200>> {
    return this.core.fetch('/contacts/{id}', 'get', metadata);
  }

  /**
   * Delete an existing contact
   *
   * @summary Delete a contact
   * @throws FetchError<404, types.DeleteContactResponse404> 404
   */
  deleteContact(metadata: types.DeleteContactMetadataParam): Promise<FetchResponse<200, types.DeleteContactResponse200>> {
    return this.core.fetch('/contacts/{id}', 'delete', metadata);
  }

  /**
   * Update a contact
   *
   * @throws FetchError<404, types.UpdateAContactNewResponse404> 404
   */
  updateAContactNew(body: types.UpdateAContactNewBodyParam, metadata: types.UpdateAContactNewMetadataParam): Promise<FetchResponse<200, types.UpdateAContactNewResponse200>>;
  updateAContactNew(metadata: types.UpdateAContactNewMetadataParam): Promise<FetchResponse<200, types.UpdateAContactNewResponse200>>;
  updateAContactNew(body?: types.UpdateAContactNewBodyParam | types.UpdateAContactNewMetadataParam, metadata?: types.UpdateAContactNewMetadataParam): Promise<FetchResponse<200, types.UpdateAContactNewResponse200>> {
    return this.core.fetch('/contacts/{id}', 'put', body, metadata);
  }

  /**
   * Get site tracking code
   *
   * @summary Retrieve site tracking code
   * @throws FetchError<400, types.RetrieveSiteTrackingCodeResponse400> 400
   */
  retrieveSiteTrackingCode(): Promise<FetchResponse<200, types.RetrieveSiteTrackingCodeResponse200>> {
    return this.core.fetch('/siteTracking/code', 'get');
  }

  /**
   * List all email activities
   *
   * @throws FetchError<400, types.ListAllEmailActivitiesResponse400> 400
   */
  listAllEmailActivities(metadata?: types.ListAllEmailActivitiesMetadataParam): Promise<FetchResponse<200, types.ListAllEmailActivitiesResponse200>> {
    return this.core.fetch('/emailActivities', 'get', metadata);
  }

  /**
   * Delete address associated with a specific list
   *
   * @throws FetchError<404, types.DeleteAnAddresslistResponse404> 404
   */
  deleteAnAddresslist(metadata: types.DeleteAnAddresslistMetadataParam): Promise<FetchResponse<200, types.DeleteAnAddresslistResponse200>> {
    return this.core.fetch('/addressLists/{id}', 'delete', metadata);
  }

  /**
   * List all campaigns
   *
   * @throws FetchError<400, types.ListAllCampaignsResponse400> 400
   */
  listAllCampaigns(metadata?: types.ListAllCampaignsMetadataParam): Promise<FetchResponse<200, types.ListAllCampaignsResponse200>> {
    return this.core.fetch('/campaigns', 'get', metadata);
  }

  /**
   * List all automations the contact is in
   *
   * @throws FetchError<404, types.ListAllContactautomationsForContactResponse404> 404
   */
  listAllContactautomationsForContact(metadata: types.ListAllContactautomationsForContactMetadataParam): Promise<FetchResponse<200, types.ListAllContactautomationsForContactResponse200>> {
    return this.core.fetch('/contacts/{id}/contactAutomations', 'get', metadata);
  }

  /**
   * Retrieve an automation a contact is in
   *
   * @throws FetchError<404, types.RetrieveAContactautomationResponse404> 404
   */
  retrieveAContactautomation(metadata: types.RetrieveAContactautomationMetadataParam): Promise<FetchResponse<200, types.RetrieveAContactautomationResponse200>> {
    return this.core.fetch('/contactAutomations/{id}', 'get', metadata);
  }

  /**
   * Remove a contact from an automation
   *
   * @throws FetchError<403, types.DeleteAContactautomationResponse403> 403
   */
  deleteAContactautomation(metadata: types.DeleteAContactautomationMetadataParam): Promise<FetchResponse<200, types.DeleteAContactautomationResponse200>> {
    return this.core.fetch('/contactAutomations/{id}', 'delete', metadata);
  }

  /**
   * List all automations
   *
   * @throws FetchError<400, types.ListAllAutomationsResponse400> 400
   */
  listAllAutomations(): Promise<FetchResponse<200, types.ListAllAutomationsResponse200>> {
    return this.core.fetch('/automations', 'get');
  }

  /**
   * List all addresses
   *
   * @throws FetchError<400, types.ListAllAddressesResponse400> 400
   */
  listAllAddresses(): Promise<FetchResponse<200, types.ListAllAddressesResponse200>> {
    return this.core.fetch('/addresses', 'get');
  }

  /**
   * Create an address
   *
   * @throws FetchError<400, types.CreateAnAddressResponse400> 400
   */
  createAnAddress(body?: types.CreateAnAddressBodyParam): Promise<FetchResponse<200, types.CreateAnAddressResponse200>> {
    return this.core.fetch('/addresses', 'post', body);
  }

  /**
   * Retrieve links associated to campaign
   *
   * @throws FetchError<404, types.RetrieveLinksAssociatedCampaignResponse404> 404
   */
  retrieveLinksAssociatedCampaign(metadata: types.RetrieveLinksAssociatedCampaignMetadataParam): Promise<FetchResponse<200, types.RetrieveLinksAssociatedCampaignResponse200>> {
    return this.core.fetch('/campaigns/{id}/links', 'get', metadata);
  }

  /**
   * Delete address associated with a specific user group
   *
   * @throws FetchError<404, types.DeleteAnAddressgroupResponse404> 404
   */
  deleteAnAddressgroup(metadata: types.DeleteAnAddressgroupMetadataParam): Promise<FetchResponse<200, types.DeleteAnAddressgroupResponse200>> {
    return this.core.fetch('/addressGroups/{id}', 'delete', metadata);
  }

  /**
   * Add a contact to an automation
   *
   * @throws FetchError<403, types.CreateNewContactautomationResponse403> 403
   */
  createNewContactautomation(body?: types.CreateNewContactautomationBodyParam): Promise<FetchResponse<201, types.CreateNewContactautomationResponse201>> {
    return this.core.fetch('/contactAutomations', 'post', body);
  }

  /**
   * List all automations a contact is in
   *
   */
  listAllContactAutomations(): Promise<FetchResponse<200, types.ListAllContactAutomationsResponse200>> {
    return this.core.fetch('/contactAutomations', 'get');
  }

  /**
   * Retrieve an address
   *
   * @throws FetchError<400, types.RetrieveAnAddressResponse400> 400
   */
  retrieveAnAddress(metadata: types.RetrieveAnAddressMetadataParam): Promise<FetchResponse<200, types.RetrieveAnAddressResponse200>> {
    return this.core.fetch('/addresses/{id}', 'get', metadata);
  }

  /**
   * Delete an address
   *
   * @throws FetchError<404, types.DeleteAnAddressResponse404> 404
   */
  deleteAnAddress(metadata: types.DeleteAnAddressMetadataParam): Promise<FetchResponse<200, types.DeleteAnAddressResponse200>> {
    return this.core.fetch('/addresses/{id}', 'delete', metadata);
  }

  /**
   * Update an address
   *
   * @throws FetchError<404, types.UpdateAnAddressResponse404> 404
   */
  updateAnAddress(body: types.UpdateAnAddressBodyParam, metadata: types.UpdateAnAddressMetadataParam): Promise<FetchResponse<200, types.UpdateAnAddressResponse200>>;
  updateAnAddress(metadata: types.UpdateAnAddressMetadataParam): Promise<FetchResponse<200, types.UpdateAnAddressResponse200>>;
  updateAnAddress(body?: types.UpdateAnAddressBodyParam | types.UpdateAnAddressMetadataParam, metadata?: types.UpdateAnAddressMetadataParam): Promise<FetchResponse<200, types.UpdateAnAddressResponse200>> {
    return this.core.fetch('/addresses/{id}', 'put', body, metadata);
  }

  /**
   * Create a note
   *
   * @throws FetchError<400, types.CreateANoteResponse400> 400
   */
  createANote(body?: types.CreateANoteBodyParam): Promise<FetchResponse<201, types.CreateANoteResponse201>> {
    return this.core.fetch('/notes', 'post', body);
  }

  /**
   * Retrieve list of all notes
   *
   */
  retrieveListOfAllNotes(): Promise<FetchResponse<200, types.RetrieveListOfAllNotesResponse200>> {
    return this.core.fetch('/notes', 'get');
  }

  /**
   * Delete a note
   *
   * @throws FetchError<403, types.DeleteNoteResponse403> 403
   */
  deleteNote(metadata: types.DeleteNoteMetadataParam): Promise<FetchResponse<200, types.DeleteNoteResponse200>> {
    return this.core.fetch('/notes/{id}', 'delete', metadata);
  }

  /**
   * Update a note
   *
   * @throws FetchError<403, types.UpdateANoteResponse403> 403
   */
  updateANote(body: types.UpdateANoteBodyParam, metadata: types.UpdateANoteMetadataParam): Promise<FetchResponse<200, types.UpdateANoteResponse200>>;
  updateANote(metadata: types.UpdateANoteMetadataParam): Promise<FetchResponse<200, types.UpdateANoteResponse200>>;
  updateANote(body?: types.UpdateANoteBodyParam | types.UpdateANoteMetadataParam, metadata?: types.UpdateANoteMetadataParam): Promise<FetchResponse<200, types.UpdateANoteResponse200>> {
    return this.core.fetch('/notes/{id}', 'put', body, metadata);
  }

  /**
   * Retrieve a note
   *
   * @throws FetchError<400, types.RetrieveANoteResponse400> 400
   */
  retrieveANote(metadata: types.RetrieveANoteMetadataParam): Promise<FetchResponse<200, types.RetrieveANoteResponse200>> {
    return this.core.fetch('/notes/{id}', 'get', metadata);
  }

  /**
   * List all segments
   *
   * @throws FetchError<400, types.ListAllSegmentsResponse400> 400
   */
  listAllSegments(): Promise<FetchResponse<200, types.ListAllSegmentsResponse200>> {
    return this.core.fetch('/segments', 'get');
  }

  /**
   * Retrieve a template
   *
   * @throws FetchError<404, types.RetrieveATemplateResponse404> 404
   */
  retrieveATemplate(metadata: types.RetrieveATemplateMetadataParam): Promise<FetchResponse<200, types.RetrieveATemplateResponse200>> {
    return this.core.fetch('/templates/{id}', 'get', metadata);
  }

  /**
   * Delete a group
   *
   * @throws FetchError<400, types.DeleteAGroup1Response400> 400
   */
  deleteAGroup1(metadata: types.DeleteAGroup1MetadataParam): Promise<FetchResponse<200, types.DeleteAGroup1Response200>> {
    return this.core.fetch('/groups/{id}', 'delete', metadata);
  }

  /**
   * Update a group
   *
   * @throws FetchError<403, types.UpdateAGroupResponse403> 403
   */
  updateAGroup(body: types.UpdateAGroupBodyParam, metadata: types.UpdateAGroupMetadataParam): Promise<FetchResponse<200, types.UpdateAGroupResponse200>>;
  updateAGroup(metadata: types.UpdateAGroupMetadataParam): Promise<FetchResponse<200, types.UpdateAGroupResponse200>>;
  updateAGroup(body?: types.UpdateAGroupBodyParam | types.UpdateAGroupMetadataParam, metadata?: types.UpdateAGroupMetadataParam): Promise<FetchResponse<200, types.UpdateAGroupResponse200>> {
    return this.core.fetch('/groups/{id}', 'put', body, metadata);
  }

  /**
   * Retrieve a group
   *
   * @throws FetchError<403, types.RetrieveAGroupResponse403> 403
   */
  retrieveAGroup(metadata: types.RetrieveAGroupMetadataParam): Promise<FetchResponse<200, types.RetrieveAGroupResponse200>> {
    return this.core.fetch('/groups/{id}', 'get', metadata);
  }

  /**
   * List all messages
   *
   * @throws FetchError<400, types.ListAllMessagesResponse400> 400
   */
  listAllMessages(): Promise<FetchResponse<200, types.ListAllMessagesResponse200>> {
    return this.core.fetch('/messages', 'get');
  }

  /**
   * Create a message
   *
   * @throws FetchError<400, types.CreateANewMessageResponse400> 400
   */
  createANewMessage(body?: types.CreateANewMessageBodyParam): Promise<FetchResponse<201, types.CreateANewMessageResponse201>> {
    return this.core.fetch('/messages', 'post', body);
  }

  /**
   * List all groups
   *
   */
  listAllGroups(): Promise<FetchResponse<200, types.ListAllGroupsResponse200>> {
    return this.core.fetch('/groups', 'get');
  }

  /**
   * Create a group
   *
   */
  createANewGroup(body?: types.CreateANewGroupBodyParam): Promise<FetchResponse<200, types.CreateANewGroupResponse200>> {
    return this.core.fetch('/groups', 'post', body);
  }

  /**
   * Update a message
   *
   * @throws FetchError<404, types.UpdateAMessageResponse404> 404
   */
  updateAMessage(metadata: types.UpdateAMessageMetadataParam): Promise<FetchResponse<200, types.UpdateAMessageResponse200>> {
    return this.core.fetch('/messages/{id}', 'put', metadata);
  }

  /**
   * Delete a message
   *
   * @throws FetchError<400, types.DeleteAMessageResponse400> 400
   */
  deleteAMessage(metadata: types.DeleteAMessageMetadataParam): Promise<FetchResponse<200, types.DeleteAMessageResponse200>> {
    return this.core.fetch('/messages/{id}', 'delete', metadata);
  }

  /**
   * Retrieve a message
   *
   * @throws FetchError<404, types.RetrieveAMessageResponse404> 404
   */
  retrieveAMessage(metadata: types.RetrieveAMessageMetadataParam): Promise<FetchResponse<200, types.RetrieveAMessageResponse200>> {
    return this.core.fetch('/messages/{id}', 'get', metadata);
  }

  /**
   * List all forms
   *
   * @throws FetchError<400, types.Forms1Response400> 400
   */
  forms1(): Promise<FetchResponse<200, types.Forms1Response200>> {
    return this.core.fetch('/forms', 'get');
  }

  /**
   * Retrieve a form
   *
   * @throws FetchError<403, types.RetrieveFormsResponse403> 403
   */
  retrieveForms(metadata: types.RetrieveFormsMetadataParam): Promise<FetchResponse<200, types.RetrieveFormsResponse200>> {
    return this.core.fetch('/forms/{id}', 'get', metadata);
  }

  /**
   * Retrieve all lists
   *
   * @throws FetchError<403, types.RetrieveAllListsResponse403> 403
   */
  retrieveAllLists(metadata?: types.RetrieveAllListsMetadataParam): Promise<FetchResponse<200, types.RetrieveAllListsResponse200>> {
    return this.core.fetch('/lists', 'get', metadata);
  }

  /**
   * Create a list
   *
   * @throws FetchError<400, types.CreateNewListResponse400> 400
   * @throws FetchError<403, types.CreateNewListResponse403> 403
   */
  createNewList(body?: types.CreateNewListBodyParam): Promise<FetchResponse<200, types.CreateNewListResponse200>> {
    return this.core.fetch('/lists', 'post', body);
  }

  /**
   * Retrieve a custom field value
   *
   * @throws FetchError<403, types.RetrieveAFieldvaluesResponse403> 403
   */
  retrieveAFieldvalues(metadata: types.RetrieveAFieldvaluesMetadataParam): Promise<FetchResponse<200, types.RetrieveAFieldvaluesResponse200>> {
    return this.core.fetch('/fieldValues/{id}', 'get', metadata);
  }

  /**
   * Delete a custom field value
   *
   * @throws FetchError<403, types.DeleteAFieldvalue1Response403> 403
   */
  deleteAFieldvalue1(metadata: types.DeleteAFieldvalue1MetadataParam): Promise<FetchResponse<200, types.DeleteAFieldvalue1Response200>> {
    return this.core.fetch('/fieldValues/{id}', 'delete', metadata);
  }

  /**
   * Update a custom field value for contact
   *
   * @throws FetchError<400, types.UpdateACustomFieldValueForContactResponse400> 400
   */
  updateACustomFieldValueForContact(body: types.UpdateACustomFieldValueForContactBodyParam, metadata: types.UpdateACustomFieldValueForContactMetadataParam): Promise<FetchResponse<200, types.UpdateACustomFieldValueForContactResponse200>>;
  updateACustomFieldValueForContact(metadata: types.UpdateACustomFieldValueForContactMetadataParam): Promise<FetchResponse<200, types.UpdateACustomFieldValueForContactResponse200>>;
  updateACustomFieldValueForContact(body?: types.UpdateACustomFieldValueForContactBodyParam | types.UpdateACustomFieldValueForContactMetadataParam, metadata?: types.UpdateACustomFieldValueForContactMetadataParam): Promise<FetchResponse<200, types.UpdateACustomFieldValueForContactResponse200>> {
    return this.core.fetch('/fieldValues/{id}', 'put', body, metadata);
  }

  /**
   * Retrieve a list
   *
   * @throws FetchError<403, types.RetrieveAListResponse403> 403
   * @throws FetchError<404, types.RetrieveAListResponse404> 404
   */
  retrieveAList(metadata: types.RetrieveAListMetadataParam): Promise<FetchResponse<200, types.RetrieveAListResponse200>> {
    return this.core.fetch('/lists/{id}', 'get', metadata);
  }

  /**
   * Delete a list
   *
   * @throws FetchError<403, types.DeleteAListResponse403> 403
   */
  deleteAList(metadata: types.DeleteAListMetadataParam): Promise<FetchResponse<200, types.DeleteAListResponse200>> {
    return this.core.fetch('/lists/{id}', 'delete', metadata);
  }

  /**
   * List all tags
   *
   * @throws FetchError<400, types.RetrieveAllTagsResponse400> 400
   */
  retrieveAllTags(metadata?: types.RetrieveAllTagsMetadataParam): Promise<FetchResponse<200, types.RetrieveAllTagsResponse200>> {
    return this.core.fetch('/tags', 'get', metadata);
  }

  /**
   * Create a tag
   *
   */
  createANewTag(body?: types.CreateANewTagBodyParam): Promise<FetchResponse<201, types.CreateANewTagResponse201>> {
    return this.core.fetch('/tags', 'post', body);
  }

  /**
   * Update settings
   *
   * @throws FetchError<404, types.SetConfigResponse404> 404
   */
  setConfig(metadata: types.SetConfigMetadataParam): Promise<FetchResponse<200, types.SetConfigResponse200>> {
    return this.core.fetch('/configs/{id}', 'put', metadata);
  }

  /**
   * Create a custom field value
   *
   * @throws FetchError<403, types.CreateFieldvalueResponse403> 403
   */
  createFieldvalue(body?: types.CreateFieldvalueBodyParam): Promise<FetchResponse<200, types.CreateFieldvalueResponse200>> {
    return this.core.fetch('/fieldValues', 'post', body);
  }

  /**
   * List all custom field values
   *
   * @throws FetchError<400, types.ListAllCustomFieldValuesResponse400> 400
   */
  listAllCustomFieldValues(metadata?: types.ListAllCustomFieldValuesMetadataParam): Promise<FetchResponse<200, types.ListAllCustomFieldValuesResponse200>> {
    return this.core.fetch('/fieldValues', 'get', metadata);
  }

  /**
   * Delete a custom field
   *
   * @throws FetchError<404, types.DeleteAFieldResponse404> 404
   */
  deleteAField(metadata: types.DeleteAFieldMetadataParam): Promise<FetchResponse<200, types.DeleteAFieldResponse200>> {
    return this.core.fetch('/fields/{id}', 'delete', metadata);
  }

  /**
   * Retrieve a custom field
   *
   * @throws FetchError<400, types.RetrieveACustomFieldContactResponse400> 400
   */
  retrieveACustomFieldContact(metadata: types.RetrieveACustomFieldContactMetadataParam): Promise<FetchResponse<200, types.RetrieveACustomFieldContactResponse200>> {
    return this.core.fetch('/fields/{id}', 'get', metadata);
  }

  /**
   * Update a custom field
   *
   * @throws FetchError<403, types.UpdateAFieldResponse403> 403
   */
  updateAField(body: types.UpdateAFieldBodyParam, metadata: types.UpdateAFieldMetadataParam): Promise<FetchResponse<200, types.UpdateAFieldResponse200>>;
  updateAField(metadata: types.UpdateAFieldMetadataParam): Promise<FetchResponse<200, types.UpdateAFieldResponse200>>;
  updateAField(body?: types.UpdateAFieldBodyParam | types.UpdateAFieldMetadataParam, metadata?: types.UpdateAFieldMetadataParam): Promise<FetchResponse<200, types.UpdateAFieldResponse200>> {
    return this.core.fetch('/fields/{id}', 'put', body, metadata);
  }

  /**
   * Create a custom field
   *
   * @throws FetchError<403, types.CreateAContactCustomFieldResponse403> 403
   * @throws FetchError<422, types.CreateAContactCustomFieldResponse422> 422
   */
  createAContactCustomField(body?: types.CreateAContactCustomFieldBodyParam): Promise<FetchResponse<201, types.CreateAContactCustomFieldResponse201>> {
    return this.core.fetch('/fields', 'post', body);
  }

  /**
   * List all custom fields
   *
   */
  retrieveFields(metadata?: types.RetrieveFieldsMetadataParam): Promise<FetchResponse<200, types.RetrieveFieldsResponse200>> {
    return this.core.fetch('/fields', 'get', metadata);
  }

  /**
   * Update a tag
   *
   */
  updateATag(body: types.UpdateATagBodyParam, metadata: types.UpdateATagMetadataParam): Promise<FetchResponse<200, types.UpdateATagResponse200>>;
  updateATag(metadata: types.UpdateATagMetadataParam): Promise<FetchResponse<200, types.UpdateATagResponse200>>;
  updateATag(body?: types.UpdateATagBodyParam | types.UpdateATagMetadataParam, metadata?: types.UpdateATagMetadataParam): Promise<FetchResponse<200, types.UpdateATagResponse200>> {
    return this.core.fetch('/tags/{id}', 'put', body, metadata);
  }

  /**
   * Delete a Tag
   *
   * @throws FetchError<404, types.DeleteATagResponse404> 404
   */
  deleteATag(metadata: types.DeleteATagMetadataParam): Promise<FetchResponse<200, types.DeleteATagResponse200>> {
    return this.core.fetch('/tags/{id}', 'delete', metadata);
  }

  /**
   * Retrieve a tag
   *
   * @throws FetchError<404, types.RetrieveATagResponse404> 404
   */
  retrieveATag(metadata: types.RetrieveATagMetadataParam): Promise<FetchResponse<200, types.RetrieveATagResponse200>> {
    return this.core.fetch('/tags/{id}', 'get', metadata);
  }

  /**
   * Subscribe a contact to a list or unsubscribe a contact from a list.
   *
   * @summary Update list status for a contact
   * @throws FetchError<400, types.UpdateListStatusForContactResponse400> 400
   */
  updateListStatusForContact(body?: types.UpdateListStatusForContactBodyParam): Promise<FetchResponse<200, types.UpdateListStatusForContactResponse200>> {
    return this.core.fetch('/contactLists', 'post', body);
  }

  /**
   * Retrieve a custom field value
   *
   * @throws FetchError<404, types.RetrieveACustomDealFieldValueResponse404> 404
   */
  retrieveACustomDealFieldValue(metadata: types.RetrieveACustomDealFieldValueMetadataParam): Promise<FetchResponse<200, types.RetrieveACustomDealFieldValueResponse200>> {
    return this.core.fetch('/dealCustomFieldData/{id}', 'get', metadata);
  }

  /**
   * Delete a custom field value
   *
   * @throws FetchError<404, types.DeleteACustomDealFieldDataResponse404> 404
   */
  deleteACustomDealFieldData(metadata: types.DeleteACustomDealFieldDataMetadataParam): Promise<FetchResponse<200, types.DeleteACustomDealFieldDataResponse200>> {
    return this.core.fetch('/dealCustomFieldData/{id}', 'delete', metadata);
  }

  /**
   * Update a custom field value
   *
   * @throws FetchError<404, types.UpdateACustomDealFieldValueResponse404> 404
   * @throws FetchError<422, types.UpdateACustomDealFieldValueResponse422> 422
   */
  updateACustomDealFieldValue(body: types.UpdateACustomDealFieldValueBodyParam, metadata: types.UpdateACustomDealFieldValueMetadataParam): Promise<FetchResponse<200, types.UpdateACustomDealFieldValueResponse200>>;
  updateACustomDealFieldValue(metadata: types.UpdateACustomDealFieldValueMetadataParam): Promise<FetchResponse<200, types.UpdateACustomDealFieldValueResponse200>>;
  updateACustomDealFieldValue(body?: types.UpdateACustomDealFieldValueBodyParam | types.UpdateACustomDealFieldValueMetadataParam, metadata?: types.UpdateACustomDealFieldValueMetadataParam): Promise<FetchResponse<200, types.UpdateACustomDealFieldValueResponse200>> {
    return this.core.fetch('/dealCustomFieldData/{id}', 'put', body, metadata);
  }

  /**
   * Create a custom field meta
   *
   * @throws FetchError<422, types.CreateCustomDealFieldMetaResponse422> 422
   */
  createCustomDealFieldMeta(body?: types.CreateCustomDealFieldMetaBodyParam): Promise<FetchResponse<200, types.CreateCustomDealFieldMetaResponse200>> {
    return this.core.fetch('/dealCustomFieldMeta', 'post', body);
  }

  /**
   * List all custom fields
   *
   */
  retrieveAllCustomDealFieldMeta(metadata?: types.RetrieveAllCustomDealFieldMetaMetadataParam): Promise<FetchResponse<200, types.RetrieveAllCustomDealFieldMetaResponse200>> {
    return this.core.fetch('/dealCustomFieldMeta', 'get', metadata);
  }

  /**
   * Delete a custom field
   *
   * @throws FetchError<404, types.DeleteACustomDealFieldMetaResponse404> 404
   */
  deleteACustomDealFieldMeta(metadata: types.DeleteACustomDealFieldMetaMetadataParam): Promise<FetchResponse<200, types.DeleteACustomDealFieldMetaResponse200>> {
    return this.core.fetch('/dealCustomFieldMeta/{id}', 'delete', metadata);
  }

  /**
   * Retrieve a custom field
   *
   * @throws FetchError<404, types.RetrieveACustomDealFieldMetaResponse404> 404
   */
  retrieveACustomDealFieldMeta(metadata: types.RetrieveACustomDealFieldMetaMetadataParam): Promise<FetchResponse<200, types.RetrieveACustomDealFieldMetaResponse200>> {
    return this.core.fetch('/dealCustomFieldMeta/{id}', 'get', metadata);
  }

  /**
   * Update a custom field
   *
   * @throws FetchError<404, types.UpdateACustomDealFieldMetaResponse404> 404
   */
  updateACustomDealFieldMeta(body: types.UpdateACustomDealFieldMetaBodyParam, metadata: types.UpdateACustomDealFieldMetaMetadataParam): Promise<FetchResponse<200, types.UpdateACustomDealFieldMetaResponse200>>;
  updateACustomDealFieldMeta(metadata: types.UpdateACustomDealFieldMetaMetadataParam): Promise<FetchResponse<200, types.UpdateACustomDealFieldMetaResponse200>>;
  updateACustomDealFieldMeta(body?: types.UpdateACustomDealFieldMetaBodyParam | types.UpdateACustomDealFieldMetaMetadataParam, metadata?: types.UpdateACustomDealFieldMetaMetadataParam): Promise<FetchResponse<200, types.UpdateACustomDealFieldMetaResponse200>> {
    return this.core.fetch('/dealCustomFieldMeta/{id}', 'put', body, metadata);
  }

  /**
   * Create a custom field value
   *
   * @throws FetchError<422, types.CreateCustomDealFieldValueResponse422> 422
   */
  createCustomDealFieldValue(body?: types.CreateCustomDealFieldValueBodyParam): Promise<FetchResponse<200, types.CreateCustomDealFieldValueResponse200>> {
    return this.core.fetch('/dealCustomFieldData', 'post', body);
  }

  /**
   * List all custom field values
   *
   */
  listAllCustomFielddataFieldValues(metadata?: types.ListAllCustomFielddataFieldValuesMetadataParam): Promise<FetchResponse<200, types.ListAllCustomFielddataFieldValuesResponse200>> {
    return this.core.fetch('/dealCustomFieldData', 'get', metadata);
  }

  /**
   * List all saved responses
   *
   */
  listAllSavedResponses(): Promise<FetchResponse<200, types.ListAllSavedResponsesResponse200>> {
    return this.core.fetch('/savedResponses', 'get');
  }

  /**
   * Create a saved response
   *
   * @throws FetchError<422, types.SavedResponsesResponse422> 422
   */
  savedResponses(body?: types.SavedResponsesBodyParam): Promise<FetchResponse<201, types.SavedResponsesResponse201>> {
    return this.core.fetch('/savedResponses', 'post', body);
  }

  /**
   * List all calendar feeds
   *
   */
  listAllCalendarFeeds(): Promise<FetchResponse<200, types.ListAllCalendarFeedsResponse200>> {
    return this.core.fetch('/calendars', 'get');
  }

  /**
   * Create a calendar feed
   *
   */
  createACalendarFeed(body?: types.CreateACalendarFeedBodyParam): Promise<FetchResponse<200, types.CreateACalendarFeedResponse200>> {
    return this.core.fetch('/calendars', 'post', body);
  }

  /**
   * Delete a calendar feed
   *
   */
  removeACalendarFeed(metadata: types.RemoveACalendarFeedMetadataParam): Promise<FetchResponse<200, types.RemoveACalendarFeedResponse200>> {
    return this.core.fetch('/calendars/{id}', 'delete', metadata);
  }

  /**
   * Update a calendar feed
   *
   */
  updateACalendarFeed(body: types.UpdateACalendarFeedBodyParam, metadata: types.UpdateACalendarFeedMetadataParam): Promise<FetchResponse<200, types.UpdateACalendarFeedResponse200>>;
  updateACalendarFeed(metadata: types.UpdateACalendarFeedMetadataParam): Promise<FetchResponse<200, types.UpdateACalendarFeedResponse200>>;
  updateACalendarFeed(body?: types.UpdateACalendarFeedBodyParam | types.UpdateACalendarFeedMetadataParam, metadata?: types.UpdateACalendarFeedMetadataParam): Promise<FetchResponse<200, types.UpdateACalendarFeedResponse200>> {
    return this.core.fetch('/calendars/{id}', 'put', body, metadata);
  }

  /**
   * Retrieve a calendar feed
   *
   * @throws FetchError<404, types.ListAllCalendarFeeds1Response404> 404
   */
  listAllCalendarFeeds1(metadata: types.ListAllCalendarFeeds1MetadataParam): Promise<FetchResponse<200, types.ListAllCalendarFeeds1Response200>> {
    return this.core.fetch('/calendars/{id}', 'get', metadata);
  }

  /**
   * Retrieve a saved response
   *
   * @throws FetchError<400, types.GetASavedresponseResponse400> 400
   */
  getASavedresponse(metadata: types.GetASavedresponseMetadataParam): Promise<FetchResponse<200, types.GetASavedresponseResponse200>> {
    return this.core.fetch('/savedResponses/{id}', 'get', metadata);
  }

  /**
   * Delete a saved response
   *
   * @throws FetchError<404, types.RetrieveASavedresponseResponse404> 404
   */
  retrieveASavedresponse(metadata: types.RetrieveASavedresponseMetadataParam): Promise<FetchResponse<200, types.RetrieveASavedresponseResponse200>> {
    return this.core.fetch('/savedResponses/{id}', 'delete', metadata);
  }

  /**
   * Update a saved response
   *
   * @throws FetchError<422, types.UpdateASavedResponseResponse422> 422
   */
  updateASavedResponse(body: types.UpdateASavedResponseBodyParam, metadata: types.UpdateASavedResponseMetadataParam): Promise<FetchResponse<200, types.UpdateASavedResponseResponse200>>;
  updateASavedResponse(metadata: types.UpdateASavedResponseMetadataParam): Promise<FetchResponse<200, types.UpdateASavedResponseResponse200>>;
  updateASavedResponse(body?: types.UpdateASavedResponseBodyParam | types.UpdateASavedResponseMetadataParam, metadata?: types.UpdateASavedResponseMetadataParam): Promise<FetchResponse<200, types.UpdateASavedResponseResponse200>> {
    return this.core.fetch('/savedResponses/{id}', 'put', body, metadata);
  }

  /**
   * Retrieve a segment
   *
   */
  retrieveASegment(metadata: types.RetrieveASegmentMetadataParam): Promise<FetchResponse<200, types.RetrieveASegmentResponse200>> {
    return this.core.fetch('/segments/{id}', 'get', metadata);
  }

  /**
   * List all scores
   *
   */
  listAllScores(): Promise<FetchResponse<200, types.ListAllScoresResponse200>> {
    return this.core.fetch('/scores', 'get');
  }

  /**
   * Retrieve a campaign
   *
   */
  retrieveACampaign(metadata: types.RetrieveACampaignMetadataParam): Promise<FetchResponse<200, types.RetrieveACampaignResponse200>> {
    return this.core.fetch('/campaigns/{id}', 'get', metadata);
  }

  /**
   * Retrieve a score
   *
   * @throws FetchError<404, types.RetrieveAScoreResponse404> 404
   */
  retrieveAScore(metadata: types.RetrieveAScoreMetadataParam): Promise<FetchResponse<200, types.RetrieveAScoreResponse200>> {
    return this.core.fetch('/scores/{id}', 'get', metadata);
  }

  /**
   * Create a list group permission
   *
   * @throws FetchError<403, types.CreateAListGroupPermissionResponse403> 403
   */
  createAListGroupPermission(body?: types.CreateAListGroupPermissionBodyParam): Promise<FetchResponse<201, types.CreateAListGroupPermissionResponse201>> {
    return this.core.fetch('/listGroups', 'post', body);
  }

  /**
   * Create a custom field relationship to list(s)
   *
   * @throws FetchError<403, types.CreateACustomFieldRelationshipToListsResponse403> 403
   */
  createACustomFieldRelationshipToLists(body?: types.CreateACustomFieldRelationshipToListsBodyParam): Promise<FetchResponse<201, types.CreateACustomFieldRelationshipToListsResponse201>> {
    return this.core.fetch('/fieldRels', 'post', body);
  }

  /**
   * Retrieve a contact's score value
   *
   * @throws FetchError<404, types.RetrieveAContactsScoreValueResponse404> 404
   */
  retrieveAContactsScoreValue(metadata: types.RetrieveAContactsScoreValueMetadataParam): Promise<FetchResponse<200, types.RetrieveAContactsScoreValueResponse200>> {
    return this.core.fetch('/contacts/{id}/scoreValues', 'get', metadata);
  }

  /**
   * Retrieve all secondary contacts
   *
   * @summary List all secondary contacts
   * @throws FetchError<400, types.ListAllSecondaryContactsResponse400> 400
   */
  listAllSecondaryContacts(): Promise<FetchResponse<200, types.ListAllSecondaryContactsResponse200>> {
    return this.core.fetch('/contactDeals', 'get');
  }

  /**
   * Create a new secondary contact for a deal
   *
   * @summary Create a secondary contact
   * @throws FetchError<422, types.CreateASecondaryContactResponse422> 422
   */
  createASecondaryContact(body?: types.CreateASecondaryContactBodyParam): Promise<FetchResponse<200, types.CreateASecondaryContactResponse200>> {
    return this.core.fetch('/contactDeals', 'post', body);
  }

  /**
   * Update an existing secondary contact
   *
   * @summary Update a secondary contact
   * @throws FetchError<404, types.UpdateASecondaryContactResponse404> 404
   * @throws FetchError<422, types.UpdateASecondaryContactResponse422> 422
   */
  updateASecondaryContact(body: types.UpdateASecondaryContactBodyParam, metadata: types.UpdateASecondaryContactMetadataParam): Promise<FetchResponse<200, types.UpdateASecondaryContactResponse200>>;
  updateASecondaryContact(metadata: types.UpdateASecondaryContactMetadataParam): Promise<FetchResponse<200, types.UpdateASecondaryContactResponse200>>;
  updateASecondaryContact(body?: types.UpdateASecondaryContactBodyParam | types.UpdateASecondaryContactMetadataParam, metadata?: types.UpdateASecondaryContactMetadataParam): Promise<FetchResponse<200, types.UpdateASecondaryContactResponse200>> {
    return this.core.fetch('/contactDeals/{id}', 'put', body, metadata);
  }

  /**
   * Delete an existing secondary contact
   *
   * @summary Delete a secondary contact
   * @throws FetchError<404, types.DeleteASecondaryContactResponse404> 404
   */
  deleteASecondaryContact(metadata: types.DeleteASecondaryContactMetadataParam): Promise<FetchResponse<200, types.DeleteASecondaryContactResponse200>> {
    return this.core.fetch('/contactDeals/{id}', 'delete', metadata);
  }

  /**
   * Retrieve an existing secondary contact
   *
   * @summary Retrieve a secondary contact
   * @throws FetchError<404, types.RetrieveASecondaryContactResponse404> 404
   */
  retrieveASecondaryContact(metadata: types.RetrieveASecondaryContactMetadataParam): Promise<FetchResponse<200, types.RetrieveASecondaryContactResponse200>> {
    return this.core.fetch('/contactDeals/{id}', 'get', metadata);
  }

  /**
   * Create custom field options
   *
   * @throws FetchError<422, types.CreateCustomFieldOptionsResponse422> 422
   */
  createCustomFieldOptions(body: types.CreateCustomFieldOptionsBodyParam): Promise<FetchResponse<201, types.CreateCustomFieldOptionsResponse201>> {
    return this.core.fetch('/fieldOption/bulk', 'post', body);
  }

  /**
   * Bulk create a custom deal field value
   *
   */
  bulkCreateACustomDealFieldValue(body?: types.BulkCreateACustomDealFieldValueBodyParam): Promise<FetchResponse<200, types.BulkCreateACustomDealFieldValueResponse200>> {
    return this.core.fetch('/dealCustomFieldData/bulkCreate', 'post', body);
  }

  /**
   * Bulk update a custom field value
   *
   */
  bulkUpdateACustomFieldValue(body?: types.BulkUpdateACustomFieldValueBodyParam): Promise<FetchResponse<200, types.BulkUpdateACustomFieldValueResponse200>> {
    return this.core.fetch('/dealCustomFieldData/bulkUpdate', 'patch', body);
  }

  /**
   * Retrieve all existing account
   *
   * @summary List all accounts
   * @throws FetchError<400, types.ListAllAccountsResponse400> 400
   */
  listAllAccounts(metadata?: types.ListAllAccountsMetadataParam): Promise<FetchResponse<200, types.ListAllAccountsResponse200>> {
    return this.core.fetch('/accounts', 'get', metadata);
  }

  /**
   * Create a new account
   *
   * @summary Create an account
   * @throws FetchError<422, types.CreateAnAccountNewResponse422> 422
   */
  createAnAccountNew(body?: types.CreateAnAccountNewBodyParam): Promise<FetchResponse<201, types.CreateAnAccountNewResponse201>> {
    return this.core.fetch('/accounts', 'post', body);
  }

  /**
   * Create a custom field value
   *
   */
  createACustomFieldValue(body?: types.CreateACustomFieldValueBodyParam): Promise<FetchResponse<200, types.CreateACustomFieldValueResponse200>> {
    return this.core.fetch('/accountCustomFieldData', 'post', body);
  }

  /**
   * List all custom field values
   *
   */
  listAllCustomFieldValues2(metadata?: types.ListAllCustomFieldValues2MetadataParam): Promise<FetchResponse<200, types.ListAllCustomFieldValues2Response200>> {
    return this.core.fetch('/accountCustomFieldData', 'get', metadata);
  }

  /**
   * Retrieve a custom field
   *
   * @throws FetchError<404, types.RetrieveACustomFieldMetaResponse404> 404
   */
  retrieveACustomFieldMeta(metadata: types.RetrieveACustomFieldMetaMetadataParam): Promise<FetchResponse<200, types.RetrieveACustomFieldMetaResponse200>> {
    return this.core.fetch('/accountCustomFieldMeta/{id}', 'get', metadata);
  }

  /**
   * Update a custom field
   *
   * @throws FetchError<404, types.UpdateACustomFieldResponse404> 404
   */
  updateACustomField(body: types.UpdateACustomFieldBodyParam, metadata: types.UpdateACustomFieldMetadataParam): Promise<FetchResponse<200, types.UpdateACustomFieldResponse200>>;
  updateACustomField(metadata: types.UpdateACustomFieldMetadataParam): Promise<FetchResponse<200, types.UpdateACustomFieldResponse200>>;
  updateACustomField(body?: types.UpdateACustomFieldBodyParam | types.UpdateACustomFieldMetadataParam, metadata?: types.UpdateACustomFieldMetadataParam): Promise<FetchResponse<200, types.UpdateACustomFieldResponse200>> {
    return this.core.fetch('/accountCustomFieldMeta/{id}', 'put', body, metadata);
  }

  /**
   * Delete a custom field
   *
   * @throws FetchError<404, types.DeleteACustomFieldResponse404> 404
   */
  deleteACustomField(metadata: types.DeleteACustomFieldMetadataParam): Promise<FetchResponse<200, types.DeleteACustomFieldResponse200>> {
    return this.core.fetch('/accountCustomFieldMeta/{id}', 'delete', metadata);
  }

  /**
   * Retrieve a custom field value
   *
   * @throws FetchError<404, types.RetrieveACustomFieldValueResponse404> 404
   */
  retrieveACustomFieldValue(metadata: types.RetrieveACustomFieldValueMetadataParam): Promise<FetchResponse<200, types.RetrieveACustomFieldValueResponse200>> {
    return this.core.fetch('/accountCustomFieldData/{id}', 'get', metadata);
  }

  /**
   * Update a custom field value
   *
   * @throws FetchError<404, types.UpdateACustomFieldValueResponse404> 404
   */
  updateACustomFieldValue(body: types.UpdateACustomFieldValueBodyParam, metadata: types.UpdateACustomFieldValueMetadataParam): Promise<FetchResponse<200, types.UpdateACustomFieldValueResponse200>>;
  updateACustomFieldValue(metadata: types.UpdateACustomFieldValueMetadataParam): Promise<FetchResponse<200, types.UpdateACustomFieldValueResponse200>>;
  updateACustomFieldValue(body?: types.UpdateACustomFieldValueBodyParam | types.UpdateACustomFieldValueMetadataParam, metadata?: types.UpdateACustomFieldValueMetadataParam): Promise<FetchResponse<200, types.UpdateACustomFieldValueResponse200>> {
    return this.core.fetch('/accountCustomFieldData/{id}', 'put', body, metadata);
  }

  /**
   * Delete a custom field value
   *
   * @throws FetchError<404, types.DeleteACustomFieldValueResponse404> 404
   */
  deleteACustomFieldValue(metadata: types.DeleteACustomFieldValueMetadataParam): Promise<FetchResponse<200, types.DeleteACustomFieldValueResponse200>> {
    return this.core.fetch('/accountCustomFieldData/{id}', 'delete', metadata);
  }

  /**
   * Delete an existing account
   *
   * @summary Delete an account
   * @throws FetchError<400, types.DeleteAnAccountResponse400> 400
   */
  deleteAnAccount(metadata: types.DeleteAnAccountMetadataParam): Promise<FetchResponse<200, types.DeleteAnAccountResponse200>> {
    return this.core.fetch('/accounts/{id}', 'delete', metadata);
  }

  /**
   * Retrieve an existing account
   *
   * @summary Retrieve an account
   */
  retrieveAnAccount(metadata: types.RetrieveAnAccountMetadataParam): Promise<FetchResponse<200, types.RetrieveAnAccountResponse200>> {
    return this.core.fetch('/accounts/{id}', 'get', metadata);
  }

  /**
   * Update an existing account
   *
   * @summary Update an account
   * @throws FetchError<400, types.UpdateAnAccountNewResponse400> 400
   */
  updateAnAccountNew(body: types.UpdateAnAccountNewBodyParam, metadata: types.UpdateAnAccountNewMetadataParam): Promise<FetchResponse<200, types.UpdateAnAccountNewResponse200>>;
  updateAnAccountNew(metadata: types.UpdateAnAccountNewMetadataParam): Promise<FetchResponse<200, types.UpdateAnAccountNewResponse200>>;
  updateAnAccountNew(body?: types.UpdateAnAccountNewBodyParam | types.UpdateAnAccountNewMetadataParam, metadata?: types.UpdateAnAccountNewMetadataParam): Promise<FetchResponse<200, types.UpdateAnAccountNewResponse200>> {
    return this.core.fetch('/accounts/{id}', 'put', body, metadata);
  }

  /**
   * Bulk create a custom account field value
   *
   */
  bulkCreateACustomAccountFieldValue(body?: types.BulkCreateACustomAccountFieldValueBodyParam): Promise<FetchResponse<200, types.BulkCreateACustomAccountFieldValueResponse200>> {
    return this.core.fetch('/accountCustomFieldData/bulkCreate', 'post', body);
  }

  /**
   * Bulk update a custom field value
   *
   */
  bulkUpdateACustomAccountFieldValue(body?: types.BulkUpdateACustomAccountFieldValueBodyParam): Promise<FetchResponse<200, types.BulkUpdateACustomAccountFieldValueResponse200>> {
    return this.core.fetch('/accountCustomFieldData/bulkUpdate', 'patch', body);
  }

  /**
   * List all custom fields
   *
   */
  listAllCustomFieldsMeta(metadata?: types.ListAllCustomFieldsMetaMetadataParam): Promise<FetchResponse<200, types.ListAllCustomFieldsMetaResponse200>> {
    return this.core.fetch('/accountCustomFieldMeta', 'get', metadata);
  }

  /**
   * Create a custom field
   *
   * @throws FetchError<422, types.CreateACustomfieldmetaResponse422> 422
   */
  createACustomfieldmeta(body?: types.CreateACustomfieldmetaBodyParam): Promise<FetchResponse<200, types.CreateACustomfieldmetaResponse200>> {
    return this.core.fetch('/accountCustomFieldMeta', 'post', body);
  }

  /**
   * Create a new note for an account
   *
   * @summary Create an account note
   */
  createAnAccountNote(body: types.CreateAnAccountNoteBodyParam, metadata: types.CreateAnAccountNoteMetadataParam): Promise<FetchResponse<201, types.CreateAnAccountNoteResponse201>>;
  createAnAccountNote(metadata: types.CreateAnAccountNoteMetadataParam): Promise<FetchResponse<201, types.CreateAnAccountNoteResponse201>>;
  createAnAccountNote(body?: types.CreateAnAccountNoteBodyParam | types.CreateAnAccountNoteMetadataParam, metadata?: types.CreateAnAccountNoteMetadataParam): Promise<FetchResponse<201, types.CreateAnAccountNoteResponse201>> {
    return this.core.fetch('/accounts/{id}/notes', 'post', body, metadata);
  }

  /**
   * Update an existing note for a account
   *
   * @summary Update an account note
   */
  updateAAccountNote(body: types.UpdateAAccountNoteBodyParam, metadata: types.UpdateAAccountNoteMetadataParam): Promise<FetchResponse<200, types.UpdateAAccountNoteResponse200>>;
  updateAAccountNote(metadata: types.UpdateAAccountNoteMetadataParam): Promise<FetchResponse<200, types.UpdateAAccountNoteResponse200>>;
  updateAAccountNote(body?: types.UpdateAAccountNoteBodyParam | types.UpdateAAccountNoteMetadataParam, metadata?: types.UpdateAAccountNoteMetadataParam): Promise<FetchResponse<200, types.UpdateAAccountNoteResponse200>> {
    return this.core.fetch('/accounts/{id}/notes/{noteid}', 'put', body, metadata);
  }

  /**
   * Delete an existing account
   *
   * @summary Bulk delete accounts
   * @throws FetchError<400, types.BulkDeleteAccountsResponse400> 400
   */
  bulkDeleteAccounts(metadata?: types.BulkDeleteAccountsMetadataParam): Promise<FetchResponse<200, types.BulkDeleteAccountsResponse200>> {
    return this.core.fetch('/accounts/bulk_delete', 'delete', metadata);
  }

  /**
   * Retrieve all existing account association
   *
   * @summary List all associations
   */
  listAllAssociations1(metadata?: types.ListAllAssociations1MetadataParam): Promise<FetchResponse<200, types.ListAllAssociations1Response200>> {
    return this.core.fetch('/accountContacts', 'get', metadata);
  }

  /**
   * Create a new account association
   *
   * @summary Create an association
   * @throws FetchError<422, types.CreateAnAccount1Response422> 422
   */
  createAnAccount1(body?: types.CreateAnAccount1BodyParam): Promise<FetchResponse<201, types.CreateAnAccount1Response201>> {
    return this.core.fetch('/accountContacts', 'post', body);
  }

  /**
   * Delete an existing account association
   *
   * @summary Delete an association
   * @throws FetchError<404, types.DeleteAnAssociation1Response404> 404
   */
  deleteAnAssociation1(metadata: types.DeleteAnAssociation1MetadataParam): Promise<FetchResponse<200, types.DeleteAnAssociation1Response200>> {
    return this.core.fetch('/accountContacts/{id}', 'delete', metadata);
  }

  /**
   * Retrieve an existing account association
   *
   * @summary Retrieve an association
   * @throws FetchError<404, types.RetrieveAnAssociationResponse404> 404
   */
  retrieveAnAssociation(metadata: types.RetrieveAnAssociationMetadataParam): Promise<FetchResponse<200, types.RetrieveAnAssociationResponse200>> {
    return this.core.fetch('/accountContacts/{id}', 'get', metadata);
  }

  /**
   * Update an existing account association
   *
   * @summary Update an association
   */
  updateAnAssociation1(body: types.UpdateAnAssociation1BodyParam, metadata: types.UpdateAnAssociation1MetadataParam): Promise<FetchResponse<200, types.UpdateAnAssociation1Response200>>;
  updateAnAssociation1(metadata: types.UpdateAnAssociation1MetadataParam): Promise<FetchResponse<200, types.UpdateAnAssociation1Response200>>;
  updateAnAssociation1(body?: types.UpdateAnAssociation1BodyParam | types.UpdateAnAssociation1MetadataParam, metadata?: types.UpdateAnAssociation1MetadataParam): Promise<FetchResponse<200, types.UpdateAnAssociation1Response200>> {
    return this.core.fetch('/accountContacts/{id}', 'put', body, metadata);
  }

  /**
   * List EcomOrderProducts
   *
   * @throws FetchError<400, types.ListEcomorderproductsResponse400> 400
   */
  listEcomorderproducts(): Promise<FetchResponse<200, types.ListEcomorderproductsResponse200>> {
    return this.core.fetch('/ecomOrderProducts', 'get');
  }

  /**
   * List EcomOrderProducts for a Specific EcomOrder
   *
   * @throws FetchError<400, types.ListProductsForOrderResponse400> 400
   */
  listProductsForOrder(metadata: types.ListProductsForOrderMetadataParam): Promise<FetchResponse<200, types.ListProductsForOrderResponse200>> {
    return this.core.fetch('/ecomOrders/{id}/orderProducts', 'get', metadata);
  }

  /**
   * Retrieve an EcomOrderProduct
   *
   * @throws FetchError<400, types.RetrieveAnEcomorderproductResponse400> 400
   * @throws FetchError<404, types.RetrieveAnEcomorderproductResponse404> 404
   */
  retrieveAnEcomorderproduct(metadata: types.RetrieveAnEcomorderproductMetadataParam): Promise<FetchResponse<200, types.RetrieveAnEcomorderproductResponse200>> {
    return this.core.fetch('/ecomOrderProducts/{id}', 'get', metadata);
  }

  /**
   * Update an existing ecommerce order/cart resource.
   *
   * @summary Update an order
   */
  updateOrder(body: types.UpdateOrderBodyParam, metadata: types.UpdateOrderMetadataParam): Promise<FetchResponse<200, types.UpdateOrderResponse200>>;
  updateOrder(metadata: types.UpdateOrderMetadataParam): Promise<FetchResponse<200, types.UpdateOrderResponse200>>;
  updateOrder(body?: types.UpdateOrderBodyParam | types.UpdateOrderMetadataParam, metadata?: types.UpdateOrderMetadataParam): Promise<FetchResponse<200, types.UpdateOrderResponse200>> {
    return this.core.fetch('/ecomOrders/{id}', 'put', body, metadata);
  }

  /**
   * Sync a contact's data
   *
   * @throws FetchError<400, types.SyncAContactsDataResponse400> 400
   */
  syncAContactsData(body?: types.SyncAContactsDataBodyParam): Promise<FetchResponse<201, types.SyncAContactsDataResponse201>> {
    return this.core.fetch('/contact/sync', 'post', body);
  }

  /**
   * Bulk import contacts
   *
   * @throws FetchError<400, types.BulkImportContactsResponse400> 400
   */
  bulkImportContacts(body: types.BulkImportContactsBodyParam, metadata?: types.BulkImportContactsMetadataParam): Promise<FetchResponse<200, types.BulkImportContactsResponse200>> {
    return this.core.fetch('/import/bulk_import', 'post', body, metadata);
  }

  /**
   * Bulk import status list
   *
   */
  bulkImportStatusList(): Promise<FetchResponse<200, types.BulkImportStatusListResponse200>> {
    return this.core.fetch('/import/bulk_import', 'get');
  }

  /**
   * View a contact's recent activity. The activity is generated when a contact is retrieved
   * via /api/3/contacts/[contactID]. This endpoint should be used after retrieving a contact
   * to obtain the latest data. This is useful for searching for contacts that match certain
   * criteria - such as being part of a certain list, or having a specific custom field
   * value.
   *
   * @summary List all contact activities
   * @throws FetchError<400, types.ListContactActivitiesResponse400> 400
   */
  listContactActivities(metadata?: types.ListContactActivitiesMetadataParam): Promise<FetchResponse<200, types.ListContactActivitiesResponse200>> {
    return this.core.fetch('/activities', 'get', metadata);
  }

  /**
   * Retrieve all schemas available within an account.
   *
   * Users are encouraged to leverage the `?showFields=all` query parameter when
   * programmatically creating new schema fields, to ensure field id uniqueness. Fields that
   * have been deleted will contain a `status: marked_for_deletion` attribute.
   *
   * @summary List all schemas
   * @throws FetchError<400, types.ListAllSchemasResponse400> 400
   */
  listAllSchemas(metadata?: types.ListAllSchemasMetadataParam): Promise<FetchResponse<200, types.ListAllSchemasResponse200>> {
    return this.core.fetch('/customObjects/schemas', 'get', metadata);
  }

  /**
   * Create a schema
   *
   * @throws FetchError<422, types.CreateASchemaResponse422> 422
   */
  createASchema(body?: types.CreateASchemaBodyParam): Promise<FetchResponse<201, types.CreateASchemaResponse201>> {
    return this.core.fetch('/customObjects/schemas', 'post', body);
  }

  /**
   * Retrieve a specific schema by id.
   *
   * Users are encouraged to leverage the `?showFields=all` query parameter when
   * programmatically creating new schema fields, to ensure field id uniqueness. Fields that
   * have been deleted will contain a `status: marked_for_deletion` attribute.
   *
   * @summary Retrieve a schema
   * @throws FetchError<404, types.RetrieveASchemaResponse404> 404
   */
  retrieveASchema(metadata: types.RetrieveASchemaMetadataParam): Promise<FetchResponse<200, types.RetrieveASchemaResponse200>> {
    return this.core.fetch('/customObjects/schemas/{id}', 'get', metadata);
  }

  /**
   * Delete a schema
   *
   * @throws FetchError<404, types.DeleteASchemaResponse404> 404
   */
  deleteASchema(metadata: types.DeleteASchemaMetadataParam): Promise<FetchResponse<200, types.DeleteASchemaResponse200>> {
    return this.core.fetch('/customObjects/schemas/{id}', 'delete', metadata);
  }

  /**
   * Make an update to a given schema.
   *
   * To delete a schema field, reference the field delete endpoint:
   * https://developers.activecampaign.com/reference/delete-a-field-1
   *
   * Users are encouraged to leverage the `?showFields=all` query parameter when
   * programmatically creating new schema fields, to ensure field id uniqueness. Fields that
   * have been deleted will contain a `status: marked_for_deletion` attribute.
   *
   * @summary Update a schema
   * @throws FetchError<404, types.UpdateASchemaResponse404> 404
   * @throws FetchError<422, types.UpdateASchemaResponse422> 422
   */
  updateASchema(body: types.UpdateASchemaBodyParam, metadata: types.UpdateASchemaMetadataParam): Promise<FetchResponse<200, types.UpdateASchemaResponse200>>;
  updateASchema(metadata: types.UpdateASchemaMetadataParam): Promise<FetchResponse<200, types.UpdateASchemaResponse200>>;
  updateASchema(body?: types.UpdateASchemaBodyParam | types.UpdateASchemaMetadataParam, metadata?: types.UpdateASchemaMetadataParam): Promise<FetchResponse<200, types.UpdateASchemaResponse200>> {
    return this.core.fetch('/customObjects/schemas/{schemaId}', 'put', body, metadata);
  }

  /**
   * List records by schema
   *
   * @throws FetchError<400, types.ListRecordsCreatedFromASchemaResponse400> 400
   * @throws FetchError<404, types.ListRecordsCreatedFromASchemaResponse404> 404
   */
  listRecordsCreatedFromASchema(metadata: types.ListRecordsCreatedFromASchemaMetadataParam): Promise<FetchResponse<200, types.ListRecordsCreatedFromASchemaResponse200>> {
    return this.core.fetch('/customObjects/records/{schemaId}', 'get', metadata);
  }

  /**
   * Create or update record
   *
   * @throws FetchError<400, types.CreateOrUpdateRecordResponse400> 400
   * @throws FetchError<422, types.CreateOrUpdateRecordResponse422> 422
   */
  createOrUpdateRecord(body: types.CreateOrUpdateRecordBodyParam, metadata: types.CreateOrUpdateRecordMetadataParam): Promise<FetchResponse<201, types.CreateOrUpdateRecordResponse201>>;
  createOrUpdateRecord(metadata: types.CreateOrUpdateRecordMetadataParam): Promise<FetchResponse<201, types.CreateOrUpdateRecordResponse201>>;
  createOrUpdateRecord(body?: types.CreateOrUpdateRecordBodyParam | types.CreateOrUpdateRecordMetadataParam, metadata?: types.CreateOrUpdateRecordMetadataParam): Promise<FetchResponse<201, types.CreateOrUpdateRecordResponse201>> {
    return this.core.fetch('/customObjects/records/{schemaId}', 'post', body, metadata);
  }

  /**
   * Get a record by id
   *
   * @throws FetchError<400, types.GetASingleRecordResponse400> 400
   */
  getASingleRecord(metadata: types.GetASingleRecordMetadataParam): Promise<FetchResponse<200, types.GetASingleRecordResponse200>> {
    return this.core.fetch('/customObjects/records/{schemaId}/{recordId}', 'get', metadata);
  }

  /**
   * Delete a record by id
   *
   * @throws FetchError<400, types.DeleteARecordResponse400> 400
   */
  deleteARecord(metadata: types.DeleteARecordMetadataParam): Promise<FetchResponse<202, types.DeleteARecordResponse202>> {
    return this.core.fetch('/customObjects/records/{schemaId}/{recordId}', 'delete', metadata);
  }

  /**
   * Delete a record by external ID
   *
   * @throws FetchError<400, types.DeleteARecordByExternalIdResponse400> 400
   */
  deleteARecordByExternalId(metadata: types.DeleteARecordByExternalIdMetadataParam): Promise<FetchResponse<202, types.DeleteARecordByExternalIdResponse202>> {
    return this.core.fetch('/customObjects/records/{schemaId}/external/{externalId}', 'delete', metadata);
  }

  /**
   * List all deal roles
   *
   * @throws FetchError<400, types.ListAllDealRolesResponse400> 400
   */
  listAllDealRoles(metadata?: types.ListAllDealRolesMetadataParam): Promise<FetchResponse<200, types.ListAllDealRolesResponse200>> {
    return this.core.fetch('/dealRoles', 'get', metadata);
  }

  /**
   * Create a deal role
   *
   * @throws FetchError<400, types.CreateADealRoleResponse400> 400
   */
  createADealRole(body?: types.CreateADealRoleBodyParam): Promise<FetchResponse<200, types.CreateADealRoleResponse200>> {
    return this.core.fetch('/dealRoles', 'post', body);
  }

  /**
   * Delete a deal role
   *
   * @throws FetchError<400, types.DeleteADealRoleResponse400> 400
   */
  deleteADealRole(metadata: types.DeleteADealRoleMetadataParam): Promise<FetchResponse<200, types.DeleteADealRoleResponse200>> {
    return this.core.fetch('/dealRoles/{id}', 'delete', metadata);
  }

  /**
   * Get a record by external id
   *
   * @throws FetchError<400, types.GetASingleRecordUsingExternalIdResponse400> 400
   */
  getASingleRecordUsingExternalId(metadata: types.GetASingleRecordUsingExternalIdMetadataParam): Promise<FetchResponse<200, types.GetASingleRecordUsingExternalIdResponse200>> {
    return this.core.fetch('/records/{schemdId}/external/{externalId}', 'get', metadata);
  }

  /**
   * Create a new task outcome
   *
   * @summary Create a task outcome
   * @throws FetchError<422, types.CreateATaskOutcomeResponse422> 422
   */
  createATaskOutcome(body: types.CreateATaskOutcomeBodyParam): Promise<FetchResponse<200, types.CreateATaskOutcomeResponse200>> {
    return this.core.fetch('/taskOutcomes', 'post', body);
  }

  /**
   * Retrieve all existing task outcomes
   *
   * @summary List all task outcomes
   * @throws FetchError<400, types.ListAllTaskOutcomesResponse400> 400
   */
  listAllTaskOutcomes(metadata?: types.ListAllTaskOutcomesMetadataParam): Promise<FetchResponse<200, types.ListAllTaskOutcomesResponse200>> {
    return this.core.fetch('/taskOutcomes', 'get', metadata);
  }

  /**
   * Retrieve an existing task outcome
   *
   * @summary Retrieve a task outcome
   * @throws FetchError<404, types.RetrieveATaskOutcomeResponse404> 404
   */
  retrieveATaskOutcome(metadata: types.RetrieveATaskOutcomeMetadataParam): Promise<FetchResponse<200, types.RetrieveATaskOutcomeResponse200>> {
    return this.core.fetch('/taskOutcomes/{id}', 'get', metadata);
  }

  /**
   * Delete an existing task outcome
   *
   * @summary Delete a task outcome
   * @throws FetchError<404, types.DeleteATaskOutcomeResponse404> 404
   */
  deleteATaskOutcome(metadata: types.DeleteATaskOutcomeMetadataParam): Promise<FetchResponse<200, types.DeleteATaskOutcomeResponse200>> {
    return this.core.fetch('/taskOutccomes/{id}', 'delete', metadata);
  }

  /**
   * Update an existing task outcome
   *
   * @summary Update a task outcome
   * @throws FetchError<422, types.UpdateATaskOutcomeResponse422> 422
   */
  updateATaskOutcome(body: types.UpdateATaskOutcomeBodyParam, metadata: types.UpdateATaskOutcomeMetadataParam): Promise<FetchResponse<200, types.UpdateATaskOutcomeResponse200>> {
    return this.core.fetch('/taskOutccomes/{id}', 'put', body, metadata);
  }

  /**
   * Retrieve all existing task type - outcome relations
   *
   * @summary List all task type - outcome relations
   * @throws FetchError<400, types.ListAllTaskTypeOutcomeRelationsResponse400> 400
   */
  listAllTaskTypeOutcomeRelations(): Promise<FetchResponse<200, types.ListAllTaskTypeOutcomeRelationsResponse200>> {
    return this.core.fetch('/tasktypeOutcomeRels', 'get');
  }

  /**
   * Create a new task type
   *
   * @summary WIP Create a task type - outcome relation
   * @throws FetchError<400, types.CreateATaskOutcome1Response400> 400
   * @throws FetchError<422, types.CreateATaskOutcome1Response422> 422
   */
  createATaskOutcome1(body: types.CreateATaskOutcome1BodyParam): Promise<FetchResponse<200, types.CreateATaskOutcome1Response200>> {
    return this.core.fetch('/tasktypeOutcomeRels', 'post', body);
  }

  /**
   * Retrieve an existing task type - outcome relation
   *
   * @summary Retrieve a task type - outcome relation
   * @throws FetchError<404, types.RetrieveATaskTypeOutcomeRelationResponse404> 404
   */
  retrieveATaskTypeOutcomeRelation(metadata: types.RetrieveATaskTypeOutcomeRelationMetadataParam): Promise<FetchResponse<200, types.RetrieveATaskTypeOutcomeRelationResponse200>> {
    return this.core.fetch('/tasktypeOutcomeRels/{id}', 'get', metadata);
  }

  /**
   * Update an existing task type
   *
   * @summary WIP Update a task type - outcome relation
   * @throws FetchError<400, types.UpdateATaskOutcome1Response400> 400
   * @throws FetchError<422, types.UpdateATaskOutcome1Response422> 422
   */
  updateATaskOutcome1(body: types.UpdateATaskOutcome1BodyParam, metadata: types.UpdateATaskOutcome1MetadataParam): Promise<FetchResponse<200, types.UpdateATaskOutcome1Response200>>;
  updateATaskOutcome1(metadata: types.UpdateATaskOutcome1MetadataParam): Promise<FetchResponse<200, types.UpdateATaskOutcome1Response200>>;
  updateATaskOutcome1(body?: types.UpdateATaskOutcome1BodyParam | types.UpdateATaskOutcome1MetadataParam, metadata?: types.UpdateATaskOutcome1MetadataParam): Promise<FetchResponse<200, types.UpdateATaskOutcome1Response200>> {
    return this.core.fetch('/tasktypeOutcomeRels/{id}', 'put', body, metadata);
  }

  /**
   * Delete an existing task type - outcome relation
   *
   * @summary Delete a task type - outcome relation
   * @throws FetchError<404, types.DeleteATaskTypeOutcomeRelationResponse404> 404
   */
  deleteATaskTypeOutcomeRelation(metadata: types.DeleteATaskTypeOutcomeRelationMetadataParam): Promise<FetchResponse<200, types.DeleteATaskTypeOutcomeRelationResponse200>> {
    return this.core.fetch('/tasktypeOutcomeRels/{id}', 'delete', metadata);
  }

  /**
   * Create a public schema
   *
   * @throws FetchError<400, types.CreateAPublicSchemaResponse400> 400
   */
  createAPublicSchema(body?: types.CreateAPublicSchemaBodyParam): Promise<FetchResponse<200, types.CreateAPublicSchemaResponse200>> {
    return this.core.fetch('/customObjects/schemas/public', 'post', body);
  }

  /**
   * Create a child schema
   *
   * @throws FetchError<400, types.CreateAChildSchemaResponse400> 400
   */
  createAChildSchema(metadata: types.CreateAChildSchemaMetadataParam): Promise<FetchResponse<200, types.CreateAChildSchemaResponse200>> {
    return this.core.fetch('/customObjects/schemas/{id}/child', 'post', metadata);
  }

  /**
   * Bulk import status info
   *
   * @throws FetchError<400, types.BulkImportStatusInfoResponse400> 400
   */
  bulkImportStatusInfo(metadata?: types.BulkImportStatusInfoMetadataParam): Promise<FetchResponse<200, types.BulkImportStatusInfoResponse200>> {
    return this.core.fetch('/import/info', 'get', metadata);
  }

  /**
   * Update an existing deal
   *
   * @summary Bulk Update Deal Owners
   * @throws FetchError<422, types.BulkUpdateDealOwnersResponse422> 422
   */
  bulkUpdateDealOwners(body?: types.BulkUpdateDealOwnersBodyParam): Promise<FetchResponse<200, types.BulkUpdateDealOwnersResponse200>> {
    return this.core.fetch('/deals/bulkUpdate', 'patch', body);
  }

  /**
   * Retrieve pipelines that given user doesn't have access to
   *
   * @summary Retrieve inaccessible pipelines by user
   * @throws FetchError<422, types.RetrieveInaccessiblePipelinesByUserResponse422> 422
   */
  retrieveInaccessiblePipelinesByUser(metadata: types.RetrieveInaccessiblePipelinesByUserMetadataParam): Promise<FetchResponse<200, types.RetrieveInaccessiblePipelinesByUserResponse200>> {
    return this.core.fetch('/dealGroup/get_inaccessible_deal_groups', 'get', metadata);
  }

  /**
   * Retrieve a contact's bounce logs
   *
   * @throws FetchError<404, types.RetrieveContactBounceLogsResponse404> 404
   */
  retrieveContactBounceLogs(metadata: types.RetrieveContactBounceLogsMetadataParam): Promise<FetchResponse<200, types.RetrieveContactBounceLogsResponse200>> {
    return this.core.fetch('/contacts/{id}/bounceLogs', 'get', metadata);
  }

  /**
   * Retrieve a contact's data
   *
   * @throws FetchError<404, types.RetrieveContactDataResponse404> 404
   */
  retrieveContactData(metadata: types.RetrieveContactDataMetadataParam): Promise<FetchResponse<200, types.RetrieveContactDataResponse200>> {
    return this.core.fetch('/contacts/{id}/contactData', 'get', metadata);
  }

  /**
   * Retrieve a contact's goals
   *
   * @throws FetchError<404, types.RetrieveContactGoalsResponse404> 404
   */
  retrieveContactGoals(metadata: types.RetrieveContactGoalsMetadataParam): Promise<FetchResponse<200, types.RetrieveContactGoalsResponse200>> {
    return this.core.fetch('/contacts/{id}/contactGoals', 'get', metadata);
  }

  /**
   * Retrieve a contact's list memberships
   *
   * @throws FetchError<404, types.RetrieveContactListMembershipsResponse404> 404
   */
  retrieveContactListMemberships(metadata: types.RetrieveContactListMembershipsMetadataParam): Promise<FetchResponse<200, types.RetrieveContactListMembershipsResponse200>> {
    return this.core.fetch('/contacts/{id}/contactLists', 'get', metadata);
  }

  /**
   * Retrieve a contact's logs
   *
   * @throws FetchError<404, types.RetrieveContactLogsResponse404> 404
   */
  retrieveContactLogs(metadata: types.RetrieveContactLogsMetadataParam): Promise<FetchResponse<200, types.RetrieveContactLogsResponse200>> {
    return this.core.fetch('/contacts/{id}/contactLogs', 'get', metadata);
  }

  /**
   * Retrieve a list of contact's deals
   *
   * @throws FetchError<404, types.RetrieveContactDealsListResponse404> 404
   */
  retrieveContactDealsList(metadata: types.RetrieveContactDealsListMetadataParam): Promise<FetchResponse<200, types.RetrieveContactDealsListResponse200>> {
    return this.core.fetch('/contacts/{id}/contactDeals', 'get', metadata);
  }

  /**
   * Retrieve a contact's deals
   *
   * @throws FetchError<404, types.RetrieveContactDealsResponse404> 404
   */
  retrieveContactDeals(metadata: types.RetrieveContactDealsMetadataParam): Promise<FetchResponse<200, types.RetrieveContactDealsResponse200>> {
    return this.core.fetch('/contacts/{id}/deals', 'get', metadata);
  }

  /**
   * Retrieve a contact's field values
   *
   * @throws FetchError<404, types.RetrieveContactFieldValuesResponse404> 404
   */
  retrieveContactFieldValues(metadata: types.RetrieveContactFieldValuesMetadataParam): Promise<FetchResponse<200, types.RetrieveContactFieldValuesResponse200>> {
    return this.core.fetch('/contacts/{id}/fieldValues', 'get', metadata);
  }

  /**
   * Retrieve a contacts list of geo-ips
   *
   * @throws FetchError<404, types.RetrieveContactGeoIpsResponse404> 404
   */
  retrieveContactGeoIps(metadata: types.RetrieveContactGeoIpsMetadataParam): Promise<FetchResponse<200, types.RetrieveContactGeoIpsResponse200>> {
    return this.core.fetch('/contacts/{id}/geoIps', 'get', metadata);
  }

  /**
   * Retrieve a contacts notes
   *
   * @throws FetchError<404, types.RetrieveContactNotesResponse404> 404
   */
  retrieveContactNotes(metadata: types.RetrieveContactNotesMetadataParam): Promise<FetchResponse<200, types.RetrieveContactNotesResponse200>> {
    return this.core.fetch('/contacts/{id}/notes', 'get', metadata);
  }

  /**
   * Retrieve a contacts organization
   *
   * @throws FetchError<404, types.RetrieveContactOrganizationResponse404> 404
   */
  retrieveContactOrganization(metadata: types.RetrieveContactOrganizationMetadataParam): Promise<FetchResponse<200, types.RetrieveContactOrganizationResponse200>> {
    return this.core.fetch('/contacts/{id}/organization', 'get', metadata);
  }

  /**
   * Retrieve a contacts plus append
   *
   * @throws FetchError<404, types.RetrieveContactPlusAppendResponse404> 404
   */
  retrieveContactPlusAppend(metadata: types.RetrieveContactPlusAppendMetadataParam): Promise<FetchResponse<200, types.RetrieveContactPlusAppendResponse200>> {
    return this.core.fetch('/contacts/{id}/plusAppend', 'get', metadata);
  }

  /**
   * Retrieve a contacts tracking logs
   *
   * @throws FetchError<404, types.RetrieveContactTrackingLogsResponse404> 404
   */
  retrieveContactTrackingLogs(metadata: types.RetrieveContactTrackingLogsMetadataParam): Promise<FetchResponse<200, types.RetrieveContactTrackingLogsResponse200>> {
    return this.core.fetch('/contacts/{id}/trackingLogs', 'get', metadata);
  }

  /**
   * Retrieve a contacts account contacts
   *
   * @throws FetchError<404, types.RetrieveContactAccountContactsResponse404> 404
   */
  retrieveContactAccountContacts(metadata: types.RetrieveContactAccountContactsMetadataParam): Promise<FetchResponse<200, types.RetrieveContactAccountContactsResponse200>> {
    return this.core.fetch('/contacts/{id}/accountContacts', 'get', metadata);
  }

  /**
   * Retrieve a contacts automation entry counts
   *
   * @throws FetchError<404, types.RetrieveContactAutomationEntryCountsResponse404> 404
   */
  retrieveContactAutomationEntryCounts(metadata: types.RetrieveContactAutomationEntryCountsMetadataParam): Promise<FetchResponse<200, types.RetrieveContactAutomationEntryCountsResponse200>> {
    return this.core.fetch('/contacts/{id}/automationEntryCounts', 'get', metadata);
  }

  /**
   * List All Group Limits
   *
   */
  listAllGroupLimits(): Promise<FetchResponse<200, types.ListAllGroupLimitsResponse200>> {
    return this.core.fetch('/groupLimits', 'get');
  }

  /**
   * Published by TrackCmp. Creates an em_local_event row in production database.
   *
   * @summary Local Events
   * @throws FetchError<403, types.LocalEventsResponse403> 403
   */
  localEvents(body?: types.LocalEventsBodyParam): Promise<FetchResponse<201, types.LocalEventsResponse201>> {
    return this.core.fetch('/localevent', 'post', body);
  }

  /**
   * Delete a custom field relationship to list(s)
   *
   * @throws FetchError<403, types.DeleteACustomFieldRelationshipToListsResponse403> 403
   */
  deleteACustomFieldRelationshipToLists(metadata: types.DeleteACustomFieldRelationshipToListsMetadataParam): Promise<FetchResponse<200, types.DeleteACustomFieldRelationshipToListsResponse200>> {
    return this.core.fetch('/fieldRels/{fieldRelId}', 'delete', metadata);
  }

  /**
   * Create a new task reminder
   *
   * @summary Create a task reminder
   * @throws FetchError<422, types.CreateATaskReminderResponse422> 422
   */
  createATaskReminder(body: types.CreateATaskReminderBodyParam): Promise<FetchResponse<200, types.CreateATaskReminderResponse200>> {
    return this.core.fetch('/taskNotifications', 'post', body);
  }

  /**
   * Deleting a schema field is an irreversible process.
   *
   * Assuming a valid `202 Accepted` response is received, any associated field data on
   * associated records will immediately be unavailable to the user. There may be a small
   * delay if record requests are in the midst of processing when the field delete request is
   * issued.
   *
   * The deleted field id will *not* be immediately recycled for reuse. Users are encouraged
   * to leverage the `?showFields=all` query parameter when programmatically creating new
   * schema fields, to ensure field id uniqueness. Fields that have been deleted will contain
   * a `status: marked_for_deletion` attribute.
   *
   * The field delete operation is only permitted for admin users.
   * Field deletion is not permitted on public or child schemas (private schemas only).
   *
   * @summary Delete a field
   */
  deleteAField1(metadata: types.DeleteAField1MetadataParam): Promise<FetchResponse<202, types.DeleteAField1Response202>> {
    return this.core.fetch('/customObjects/schemas/{schemaId}/fields/{fieldId}', 'delete', metadata);
  }

  /**
   * Get a log of events for a Contact
   *
   * @summary Get Contact's Tracking Logs/Events
   */
  getContactsTrackingLogsevents(metadata: types.GetContactsTrackingLogseventsMetadataParam): Promise<FetchResponse<200, types.GetContactsTrackingLogseventsResponse200>> {
    return this.core.fetch('/contacts/{contactId}/trackingLogs', 'get', metadata);
  }

  /**
   * Get the contact that was involved in an event.
   *
   * @summary Get Contact By Event ID
   */
  getContactByEventId(metadata: types.GetContactByEventIdMetadataParam): Promise<FetchResponse<200, types.GetContactByEventIdResponse200>> {
    return this.core.fetch('/trackingLogs/{eventId}/contact', 'get', metadata);
  }

  /**
   * View a recent activity for Deals. A specific deal's activity can also be viewed using
   * /api/3/deals/[dealID]/dealActivities.
   *
   * @summary List all deal activities
   * @throws FetchError<400, types.ListAllDealActivitiesResponse400> 400
   */
  listAllDealActivities(metadata?: types.ListAllDealActivitiesMetadataParam): Promise<FetchResponse<200, types.ListAllDealActivitiesResponse200>> {
    return this.core.fetch('/dealActivities', 'get', metadata);
  }

  /**
   * Add Custom Field to Field Group
   *
   * @throws FetchError<403, types.AddCustomFieldToFieldGroupResponse403> 403
   * @throws FetchError<404, types.AddCustomFieldToFieldGroupResponse404> 404
   * @throws FetchError<422, types.AddCustomFieldToFieldGroupResponse422> 422
   */
  addCustomFieldToFieldGroup(body?: types.AddCustomFieldToFieldGroupBodyParam): Promise<FetchResponse<200, types.AddCustomFieldToFieldGroupResponse200>> {
    return this.core.fetch('/groupMembers', 'post', body);
  }

  /**
   * Delete Custom Field Field Group
   *
   * @throws FetchError<404, types.DeleteCustomFieldFieldGroupResponse404> 404
   */
  deleteCustomFieldFieldGroup(metadata: types.DeleteCustomFieldFieldGroupMetadataParam): Promise<FetchResponse<200, types.DeleteCustomFieldFieldGroupResponse200>> {
    return this.core.fetch('/groupMembers/{groupID}', 'delete', metadata);
  }

  /**
   * Get Custom Field to Field Group
   *
   * @throws FetchError<404, types.GetCustomFieldToFieldGroupResponse404> 404
   */
  getCustomFieldToFieldGroup(metadata: types.GetCustomFieldToFieldGroupMetadataParam): Promise<FetchResponse<200, types.GetCustomFieldToFieldGroupResponse200>> {
    return this.core.fetch('/groupMembers/{groupID}', 'get', metadata);
  }

  /**
   * Update Custom Field Field Group
   *
   * @throws FetchError<403, types.UpdateCustomFieldFieldGroupResponse403> 403
   * @throws FetchError<404, types.UpdateCustomFieldFieldGroupResponse404> 404
   * @throws FetchError<422, types.UpdateCustomFieldFieldGroupResponse422> 422
   */
  updateCustomFieldFieldGroup(body: types.UpdateCustomFieldFieldGroupBodyParam, metadata: types.UpdateCustomFieldFieldGroupMetadataParam): Promise<FetchResponse<200, types.UpdateCustomFieldFieldGroupResponse200>>;
  updateCustomFieldFieldGroup(metadata: types.UpdateCustomFieldFieldGroupMetadataParam): Promise<FetchResponse<200, types.UpdateCustomFieldFieldGroupResponse200>>;
  updateCustomFieldFieldGroup(body?: types.UpdateCustomFieldFieldGroupBodyParam | types.UpdateCustomFieldFieldGroupMetadataParam, metadata?: types.UpdateCustomFieldFieldGroupMetadataParam): Promise<FetchResponse<200, types.UpdateCustomFieldFieldGroupResponse200>> {
    return this.core.fetch('/groupMembers/{groupId}', 'put', body, metadata);
  }

  /**
   * Retrieve a contacts geo IP address
   *
   * @throws FetchError<404, types.RetrieveAContactsGeoIpAddressResponse404> 404
   */
  retrieveAContactsGeoIpAddress(metadata: types.RetrieveAContactsGeoIpAddressMetadataParam): Promise<FetchResponse<200, types.RetrieveAContactsGeoIpAddressResponse200>> {
    return this.core.fetch('/geoIps/{geoAddressID}/geoAddress', 'get', metadata);
  }

  /**
   * Retrieve a list of personalization variables
   *
   * @summary List Variables
   * @throws FetchError<400, types.ListVariablesResponse400> 400
   */
  listVariables(metadata?: types.ListVariablesMetadataParam): Promise<FetchResponse<200, types.ListVariablesResponse200>> {
    return this.core.fetch('/personalizations', 'get', metadata);
  }

  /**
   * Create a personalization variable
   *
   * @summary Create a Variable
   */
  createVariable(body?: types.CreateVariableBodyParam): Promise<FetchResponse<200, types.CreateVariableResponse200>> {
    return this.core.fetch('/personalizations', 'post', body);
  }

  /**
   * Retrieve an individual personalization variable
   *
   * @summary Retrieve a Variable
   * @throws FetchError<404, types.RetrieveVariableResponse404> 404
   */
  retrieveVariable(metadata: types.RetrieveVariableMetadataParam): Promise<FetchResponse<200, types.RetrieveVariableResponse200>> {
    return this.core.fetch('/personalizations/{variableID}', 'get', metadata);
  }

  /**
   * Edit a personalization variable
   *
   * @summary Edit a Variable
   * @throws FetchError<404, types.EditVariableResponse404> 404
   */
  editVariable(body: types.EditVariableBodyParam, metadata: types.EditVariableMetadataParam): Promise<FetchResponse<200, types.EditVariableResponse200>>;
  editVariable(metadata: types.EditVariableMetadataParam): Promise<FetchResponse<200, types.EditVariableResponse200>>;
  editVariable(body?: types.EditVariableBodyParam | types.EditVariableMetadataParam, metadata?: types.EditVariableMetadataParam): Promise<FetchResponse<200, types.EditVariableResponse200>> {
    return this.core.fetch('/personalizations/{variableID}', 'put', body, metadata);
  }

  /**
   * Delete a personalization variable
   *
   * @summary Delete a Variable
   * @throws FetchError<400, types.DeleteVariableResponse400> 400
   */
  deleteVariable(metadata: types.DeleteVariableMetadataParam): Promise<FetchResponse<200, types.DeleteVariableResponse200>> {
    return this.core.fetch('/personalizations/{variableID}', 'delete', metadata);
  }

  /**
   * Bulk delete personalization variables
   *
   * @summary Bulk Delete Variables
   */
  bulkDeleteVariables(metadata?: types.BulkDeleteVariablesMetadataParam): Promise<FetchResponse<200, types.BulkDeleteVariablesResponse200>> {
    return this.core.fetch('/personalizations/bulkdelete', 'delete', metadata);
  }

  /**
   * Edit campaign
   *
   */
  editCampaign(body: types.EditCampaignBodyParam, metadata: types.EditCampaignMetadataParam): Promise<FetchResponse<number, unknown>>;
  editCampaign(metadata: types.EditCampaignMetadataParam): Promise<FetchResponse<number, unknown>>;
  editCampaign(body?: types.EditCampaignBodyParam | types.EditCampaignMetadataParam, metadata?: types.EditCampaignMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/campaigns/{id}/edit', 'put', body, metadata);
  }

  /**
   * Create Campaign
   *
   * @throws FetchError<400, types.CreateCampaignResponse400> 400
   */
  createCampaign(body: types.CreateCampaignBodyParam): Promise<FetchResponse<200, types.CreateCampaignResponse200>> {
    return this.core.fetch('/campaign', 'post', body);
  }

  /**
   * Duplicate Campaign
   *
   * @throws FetchError<400, types.DuplicateCampaignResponse400> 400
   */
  duplicateCampaign(metadata: types.DuplicateCampaignMetadataParam): Promise<FetchResponse<200, types.DuplicateCampaignResponse200>> {
    return this.core.fetch('/campaigns/{id}/copy', 'post', metadata);
  }
}

const createSDK = (() => { return new SDK(); })()
;

export default createSDK;

export type { AddCustomFieldToFieldGroupBodyParam, AddCustomFieldToFieldGroupResponse200, AddCustomFieldToFieldGroupResponse403, AddCustomFieldToFieldGroupResponse404, AddCustomFieldToFieldGroupResponse422, AddDomainToWhitelistBodyParam, AddDomainToWhitelistResponse200, AddDomainToWhitelistResponse400, BrandingsMetadataParam, BrandingsResponse200, BrandingsResponse400, BulkCreateACustomAccountFieldValueBodyParam, BulkCreateACustomAccountFieldValueResponse200, BulkCreateACustomDealFieldValueBodyParam, BulkCreateACustomDealFieldValueResponse200, BulkDeleteAccountsMetadataParam, BulkDeleteAccountsResponse200, BulkDeleteAccountsResponse400, BulkDeleteVariablesMetadataParam, BulkDeleteVariablesResponse200, BulkImportContactsBodyParam, BulkImportContactsMetadataParam, BulkImportContactsResponse200, BulkImportContactsResponse400, BulkImportStatusInfoMetadataParam, BulkImportStatusInfoResponse200, BulkImportStatusInfoResponse400, BulkImportStatusListResponse200, BulkUpdateACustomAccountFieldValueBodyParam, BulkUpdateACustomAccountFieldValueResponse200, BulkUpdateACustomFieldValueBodyParam, BulkUpdateACustomFieldValueResponse200, BulkUpdateDealOwnersBodyParam, BulkUpdateDealOwnersResponse200, BulkUpdateDealOwnersResponse422, CreateACalendarFeedBodyParam, CreateACalendarFeedResponse200, CreateAChildSchemaMetadataParam, CreateAChildSchemaResponse200, CreateAChildSchemaResponse400, CreateAContactCustomFieldBodyParam, CreateAContactCustomFieldResponse201, CreateAContactCustomFieldResponse403, CreateAContactCustomFieldResponse422, CreateACustomFieldRelationshipToListsBodyParam, CreateACustomFieldRelationshipToListsResponse201, CreateACustomFieldRelationshipToListsResponse403, CreateACustomFieldValueBodyParam, CreateACustomFieldValueResponse200, CreateACustomfieldmetaBodyParam, CreateACustomfieldmetaResponse200, CreateACustomfieldmetaResponse422, CreateADealNewBodyParam, CreateADealNewResponse201, CreateADealNewResponse400, CreateADealNoteBodyParam, CreateADealNoteMetadataParam, CreateADealNoteResponse201, CreateADealRoleBodyParam, CreateADealRoleResponse200, CreateADealRoleResponse400, CreateADealStageBodyParam, CreateADealStageMetadataParam, CreateADealStageResponse200, CreateADealStageResponse400, CreateADealTaskTypeBodyParam, CreateADealTaskTypeResponse200, CreateADealTaskTypeResponse400, CreateAListGroupPermissionBodyParam, CreateAListGroupPermissionResponse201, CreateAListGroupPermissionResponse403, CreateANewContactBodyParam, CreateANewContactResponse201, CreateANewContactResponse404, CreateANewContactResponse422, CreateANewEventNameOnlyBodyParam, CreateANewEventNameOnlyResponse201, CreateANewGroupBodyParam, CreateANewGroupResponse200, CreateANewMessageBodyParam, CreateANewMessageResponse201, CreateANewMessageResponse400, CreateANewTagBodyParam, CreateANewTagResponse201, CreateANoteBodyParam, CreateANoteResponse201, CreateANoteResponse400, CreateAPipelineBodyParam, CreateAPipelineResponse200, CreateAPipelineResponse400, CreateAPublicSchemaBodyParam, CreateAPublicSchemaResponse200, CreateAPublicSchemaResponse400, CreateASchemaBodyParam, CreateASchemaResponse201, CreateASchemaResponse422, CreateASecondaryContactBodyParam, CreateASecondaryContactResponse200, CreateASecondaryContactResponse422, CreateATaskOutcome1BodyParam, CreateATaskOutcome1Response200, CreateATaskOutcome1Response400, CreateATaskOutcome1Response422, CreateATaskOutcomeBodyParam, CreateATaskOutcomeResponse200, CreateATaskOutcomeResponse422, CreateATaskReminderBodyParam, CreateATaskReminderResponse200, CreateATaskReminderResponse422, CreateAnAccount1BodyParam, CreateAnAccount1Response201, CreateAnAccount1Response422, CreateAnAccountNewBodyParam, CreateAnAccountNewResponse201, CreateAnAccountNewResponse422, CreateAnAccountNoteBodyParam, CreateAnAccountNoteMetadataParam, CreateAnAccountNoteResponse201, CreateAnAddressBodyParam, CreateAnAddressResponse200, CreateAnAddressResponse400, CreateCampaignBodyParam, CreateCampaignResponse200, CreateCampaignResponse400, CreateConnectionBodyParam, CreateConnectionResponse200, CreateContactTagBodyParam, CreateContactTagResponse201, CreateContactTagResponse404, CreateContactTagResponse422, CreateCustomDealFieldMetaBodyParam, CreateCustomDealFieldMetaResponse200, CreateCustomDealFieldMetaResponse422, CreateCustomDealFieldValueBodyParam, CreateCustomDealFieldValueResponse200, CreateCustomDealFieldValueResponse422, CreateCustomFieldOptionsBodyParam, CreateCustomFieldOptionsResponse201, CreateCustomFieldOptionsResponse422, CreateCustomerBodyParam, CreateCustomerResponse201, CreateCustomerResponse400, CreateFieldvalueBodyParam, CreateFieldvalueResponse200, CreateFieldvalueResponse403, CreateNewContactautomationBodyParam, CreateNewContactautomationResponse201, CreateNewContactautomationResponse403, CreateNewListBodyParam, CreateNewListResponse200, CreateNewListResponse400, CreateNewListResponse403, CreateOrUpdateRecordBodyParam, CreateOrUpdateRecordMetadataParam, CreateOrUpdateRecordResponse201, CreateOrUpdateRecordResponse400, CreateOrUpdateRecordResponse422, CreateOrderBodyParam, CreateOrderResponse201, CreateTaskBodyParam, CreateTaskResponse201, CreateTaskResponse400, CreateUserBodyParam, CreateUserResponse201, CreateUserResponse400, CreateVariableBodyParam, CreateVariableResponse200, CreateWebhookBodyParam, CreateWebhookResponse201, DeleteAContactautomationMetadataParam, DeleteAContactautomationResponse200, DeleteAContactautomationResponse403, DeleteACustomDealFieldDataMetadataParam, DeleteACustomDealFieldDataResponse200, DeleteACustomDealFieldDataResponse404, DeleteACustomDealFieldMetaMetadataParam, DeleteACustomDealFieldMetaResponse200, DeleteACustomDealFieldMetaResponse404, DeleteACustomFieldMetadataParam, DeleteACustomFieldRelationshipToListsMetadataParam, DeleteACustomFieldRelationshipToListsResponse200, DeleteACustomFieldRelationshipToListsResponse403, DeleteACustomFieldResponse200, DeleteACustomFieldResponse404, DeleteACustomFieldValueMetadataParam, DeleteACustomFieldValueResponse200, DeleteACustomFieldValueResponse404, DeleteADealMetadataParam, DeleteADealResponse200, DeleteADealResponse400, DeleteADealRoleMetadataParam, DeleteADealRoleResponse200, DeleteADealRoleResponse400, DeleteADealStageMetadataParam, DeleteADealStageResponse200, DeleteADealTaskTypeMetadataParam, DeleteADealTaskTypeResponse403, DeleteAField1MetadataParam, DeleteAField1Response202, DeleteAFieldMetadataParam, DeleteAFieldResponse200, DeleteAFieldResponse404, DeleteAFieldvalue1MetadataParam, DeleteAFieldvalue1Response200, DeleteAFieldvalue1Response403, DeleteAGroup1MetadataParam, DeleteAGroup1Response200, DeleteAGroup1Response400, DeleteAListMetadataParam, DeleteAListResponse200, DeleteAListResponse403, DeleteAMessageMetadataParam, DeleteAMessageResponse200, DeleteAMessageResponse400, DeleteAPipelineMetadataParam, DeleteAPipelineResponse200, DeleteARecordByExternalIdMetadataParam, DeleteARecordByExternalIdResponse202, DeleteARecordByExternalIdResponse400, DeleteARecordMetadataParam, DeleteARecordResponse202, DeleteARecordResponse400, DeleteASchemaMetadataParam, DeleteASchemaResponse200, DeleteASchemaResponse404, DeleteASecondaryContactMetadataParam, DeleteASecondaryContactResponse200, DeleteASecondaryContactResponse404, DeleteATagMetadataParam, DeleteATagResponse200, DeleteATagResponse404, DeleteATaskOutcomeMetadataParam, DeleteATaskOutcomeResponse200, DeleteATaskOutcomeResponse404, DeleteATaskTypeOutcomeRelationMetadataParam, DeleteATaskTypeOutcomeRelationResponse200, DeleteATaskTypeOutcomeRelationResponse404, DeleteAnAccountMetadataParam, DeleteAnAccountResponse200, DeleteAnAccountResponse400, DeleteAnAddressMetadataParam, DeleteAnAddressResponse200, DeleteAnAddressResponse404, DeleteAnAddressgroupMetadataParam, DeleteAnAddressgroupResponse200, DeleteAnAddressgroupResponse404, DeleteAnAddresslistMetadataParam, DeleteAnAddresslistResponse200, DeleteAnAddresslistResponse404, DeleteAnAssociation1MetadataParam, DeleteAnAssociation1Response200, DeleteAnAssociation1Response404, DeleteConnectionMetadataParam, DeleteConnectionResponse200, DeleteConnectionResponse400, DeleteContactMetadataParam, DeleteContactResponse200, DeleteContactResponse404, DeleteCustomFieldFieldGroupMetadataParam, DeleteCustomFieldFieldGroupResponse200, DeleteCustomFieldFieldGroupResponse404, DeleteCustomerMetadataParam, DeleteCustomerResponse200, DeleteCustomerResponse400, DeleteNoteMetadataParam, DeleteNoteResponse200, DeleteNoteResponse403, DeleteOrderMetadataParam, DeleteOrderResponse200, DeleteTaskMetadataParam, DeleteTaskResponse200, DeleteTaskResponse400, DeleteUserMetadataParam, DeleteUserResponse200, DeleteUserResponse400, DeleteVariableMetadataParam, DeleteVariableResponse200, DeleteVariableResponse400, DeleteWebhookMetadataParam, DeleteWebhookResponse200, DuplicateCampaignMetadataParam, DuplicateCampaignResponse200, DuplicateCampaignResponse400, EditCampaignBodyParam, EditCampaignMetadataParam, EditVariableBodyParam, EditVariableMetadataParam, EditVariableResponse200, EditVariableResponse404, EnableDisableEventTrackingBodyParam, EnableDisableEventTrackingResponse200, EnableDisableEventTrackingResponse400, EnableDisableSiteTrackingBodyParam, EnableDisableSiteTrackingResponse200, EnableDisableSiteTrackingResponse400, Forms1Response200, Forms1Response400, GetAListOfWebhookEventsResponse200, GetAListOfWebhooksMetadataParam, GetAListOfWebhooksResponse200, GetAListOfWebhooksResponse400, GetASavedresponseMetadataParam, GetASavedresponseResponse200, GetASavedresponseResponse400, GetASingleRecordMetadataParam, GetASingleRecordResponse200, GetASingleRecordResponse400, GetASingleRecordUsingExternalIdMetadataParam, GetASingleRecordUsingExternalIdResponse200, GetASingleRecordUsingExternalIdResponse400, GetBrandingMetadataParam, GetBrandingResponse200, GetBrandingResponse400, GetConnectionMetadataParam, GetConnectionResponse200, GetConnectionResponse400, GetContactByEventIdMetadataParam, GetContactByEventIdResponse200, GetContactMetadataParam, GetContactResponse200, GetContactResponse404, GetContactsTrackingLogseventsMetadataParam, GetContactsTrackingLogseventsResponse200, GetCustomFieldToFieldGroupMetadataParam, GetCustomFieldToFieldGroupResponse200, GetCustomFieldToFieldGroupResponse404, GetCustomerMetadataParam, GetCustomerResponse200, GetCustomerResponse400, GetOrderMetadataParam, GetOrderResponse200, GetTaskMetadataParam, GetTaskResponse201, GetTaskResponse400, GetUserEmailMetadataParam, GetUserEmailResponse200, GetUserEmailResponse400, GetUserLoggedinResponse200, GetUserLoggedinResponse400, GetUserMetadataParam, GetUserResponse200, GetUserResponse400, GetUserUsernameMetadataParam, GetUserUsernameResponse200, GetUserUsernameResponse400, GetWebhookMetadataParam, GetWebhookResponse200, ListAllAccountsMetadataParam, ListAllAccountsResponse200, ListAllAccountsResponse400, ListAllAddressesResponse200, ListAllAddressesResponse400, ListAllAssociations1MetadataParam, ListAllAssociations1Response200, ListAllAutomationsResponse200, ListAllAutomationsResponse400, ListAllCalendarFeeds1MetadataParam, ListAllCalendarFeeds1Response200, ListAllCalendarFeeds1Response404, ListAllCalendarFeedsResponse200, ListAllCampaignsMetadataParam, ListAllCampaignsResponse200, ListAllCampaignsResponse400, ListAllConnectionsMetadataParam, ListAllConnectionsResponse200, ListAllConnectionsResponse400, ListAllContactAutomationsResponse200, ListAllContactautomationsForContactMetadataParam, ListAllContactautomationsForContactResponse200, ListAllContactautomationsForContactResponse404, ListAllContactsMetadataParam, ListAllContactsResponse200, ListAllContactsResponse400, ListAllCustomFieldValues2MetadataParam, ListAllCustomFieldValues2Response200, ListAllCustomFieldValuesMetadataParam, ListAllCustomFieldValuesResponse200, ListAllCustomFieldValuesResponse400, ListAllCustomFielddataFieldValuesMetadataParam, ListAllCustomFielddataFieldValuesResponse200, ListAllCustomFieldsMetaMetadataParam, ListAllCustomFieldsMetaResponse200, ListAllCustomersMetadataParam, ListAllCustomersResponse200, ListAllDealActivitiesMetadataParam, ListAllDealActivitiesResponse200, ListAllDealActivitiesResponse400, ListAllDealRolesMetadataParam, ListAllDealRolesResponse200, ListAllDealRolesResponse400, ListAllDealStagesMetadataParam, ListAllDealStagesResponse200, ListAllDealStagesResponse400, ListAllDealTaskTypesResponse200, ListAllDealTaskTypesResponse400, ListAllDealsMetadataParam, ListAllDealsResponse200, ListAllDealsResponse400, ListAllEmailActivitiesMetadataParam, ListAllEmailActivitiesResponse200, ListAllEmailActivitiesResponse400, ListAllEventTypesResponse200, ListAllEventTypesResponse400, ListAllGroupLimitsResponse200, ListAllGroupsResponse200, ListAllMessagesResponse200, ListAllMessagesResponse400, ListAllOrdersMetadataParam, ListAllOrdersResponse200, ListAllOrdersResponse422, ListAllPipelinesMetadataParam, ListAllPipelinesResponse200, ListAllPipelinesResponse400, ListAllSavedResponsesResponse200, ListAllSchemasMetadataParam, ListAllSchemasResponse200, ListAllSchemasResponse400, ListAllScoresResponse200, ListAllSecondaryContactsResponse200, ListAllSecondaryContactsResponse400, ListAllSegmentsResponse200, ListAllSegmentsResponse400, ListAllTaskOutcomesMetadataParam, ListAllTaskOutcomesResponse200, ListAllTaskOutcomesResponse400, ListAllTaskTypeOutcomeRelationsResponse200, ListAllTaskTypeOutcomeRelationsResponse400, ListAllTasksMetadataParam, ListAllTasksResponse201, ListAllTasksResponse400, ListAllUsersResponse200, ListAllUsersResponse400, ListAllWhitelistedDomainsResponse200, ListContactActivitiesMetadataParam, ListContactActivitiesResponse200, ListContactActivitiesResponse400, ListEcomorderproductsResponse200, ListEcomorderproductsResponse400, ListProductsForOrderMetadataParam, ListProductsForOrderResponse200, ListProductsForOrderResponse400, ListRecordsCreatedFromASchemaMetadataParam, ListRecordsCreatedFromASchemaResponse200, ListRecordsCreatedFromASchemaResponse400, ListRecordsCreatedFromASchemaResponse404, ListVariablesMetadataParam, ListVariablesResponse200, ListVariablesResponse400, LocalEventsBodyParam, LocalEventsResponse201, LocalEventsResponse403, MoveDealTasksToAnotherDealTaskTypeBodyParam, MoveDealTasksToAnotherDealTaskTypeMetadataParam, MoveDealTasksToAnotherDealTaskTypeResponse200, MoveDealTasksToAnotherDealTaskTypeResponse400, MoveDealsToAnotherDealStageBodyParam, MoveDealsToAnotherDealStageMetadataParam, MoveDealsToAnotherDealStageResponse200, MoveDealsToAnotherDealStageResponse422, RemoveACalendarFeedMetadataParam, RemoveACalendarFeedResponse200, RemoveAContactsTagMetadataParam, RemoveAContactsTagResponse200, RemoveAContactsTagResponse404, RemoveDomainFromWhitelistMetadataParam, RemoveDomainFromWhitelistResponse204, RemoveEventNameOnlyMetadataParam, RemoveEventNameOnlyResponse200, RemoveEventNameOnlyResponse400, RetrieveACampaignMetadataParam, RetrieveACampaignResponse200, RetrieveAContactautomationMetadataParam, RetrieveAContactautomationResponse200, RetrieveAContactautomationResponse404, RetrieveAContactsGeoIpAddressMetadataParam, RetrieveAContactsGeoIpAddressResponse200, RetrieveAContactsGeoIpAddressResponse404, RetrieveAContactsScoreValueMetadataParam, RetrieveAContactsScoreValueResponse200, RetrieveAContactsScoreValueResponse404, RetrieveACustomDealFieldMetaMetadataParam, RetrieveACustomDealFieldMetaResponse200, RetrieveACustomDealFieldMetaResponse404, RetrieveACustomDealFieldValueMetadataParam, RetrieveACustomDealFieldValueResponse200, RetrieveACustomDealFieldValueResponse404, RetrieveACustomFieldContactMetadataParam, RetrieveACustomFieldContactResponse200, RetrieveACustomFieldContactResponse400, RetrieveACustomFieldMetaMetadataParam, RetrieveACustomFieldMetaResponse200, RetrieveACustomFieldMetaResponse404, RetrieveACustomFieldValueMetadataParam, RetrieveACustomFieldValueResponse200, RetrieveACustomFieldValueResponse404, RetrieveADealMetadataParam, RetrieveADealResponse200, RetrieveADealStageMetadataParam, RetrieveADealStageResponse200, RetrieveADealStageResponse400, RetrieveADealTaskTypeMetadataParam, RetrieveADealTaskTypeResponse200, RetrieveADealTaskTypeResponse400, RetrieveAFieldvaluesMetadataParam, RetrieveAFieldvaluesResponse200, RetrieveAFieldvaluesResponse403, RetrieveAGroupMetadataParam, RetrieveAGroupResponse200, RetrieveAGroupResponse403, RetrieveAListMetadataParam, RetrieveAListResponse200, RetrieveAListResponse403, RetrieveAListResponse404, RetrieveAMessageMetadataParam, RetrieveAMessageResponse200, RetrieveAMessageResponse404, RetrieveANoteMetadataParam, RetrieveANoteResponse200, RetrieveANoteResponse400, RetrieveAPipelineMetadataParam, RetrieveAPipelineResponse200, RetrieveAPipelineResponse400, RetrieveASavedresponseMetadataParam, RetrieveASavedresponseResponse200, RetrieveASavedresponseResponse404, RetrieveASchemaMetadataParam, RetrieveASchemaResponse200, RetrieveASchemaResponse404, RetrieveAScoreMetadataParam, RetrieveAScoreResponse200, RetrieveAScoreResponse404, RetrieveASecondaryContactMetadataParam, RetrieveASecondaryContactResponse200, RetrieveASecondaryContactResponse404, RetrieveASegmentMetadataParam, RetrieveASegmentResponse200, RetrieveATagMetadataParam, RetrieveATagResponse200, RetrieveATagResponse404, RetrieveATaskOutcomeMetadataParam, RetrieveATaskOutcomeResponse200, RetrieveATaskOutcomeResponse404, RetrieveATaskTypeOutcomeRelationMetadataParam, RetrieveATaskTypeOutcomeRelationResponse200, RetrieveATaskTypeOutcomeRelationResponse404, RetrieveATemplateMetadataParam, RetrieveATemplateResponse200, RetrieveATemplateResponse404, RetrieveAllCustomDealFieldMetaMetadataParam, RetrieveAllCustomDealFieldMetaResponse200, RetrieveAllListsMetadataParam, RetrieveAllListsResponse200, RetrieveAllListsResponse403, RetrieveAllTagsMetadataParam, RetrieveAllTagsResponse200, RetrieveAllTagsResponse400, RetrieveAnAccountMetadataParam, RetrieveAnAccountResponse200, RetrieveAnAddressMetadataParam, RetrieveAnAddressResponse200, RetrieveAnAddressResponse400, RetrieveAnAssociationMetadataParam, RetrieveAnAssociationResponse200, RetrieveAnAssociationResponse404, RetrieveAnEcomorderproductMetadataParam, RetrieveAnEcomorderproductResponse200, RetrieveAnEcomorderproductResponse400, RetrieveAnEcomorderproductResponse404, RetrieveContactAccountContactsMetadataParam, RetrieveContactAccountContactsResponse200, RetrieveContactAccountContactsResponse404, RetrieveContactAutomationEntryCountsMetadataParam, RetrieveContactAutomationEntryCountsResponse200, RetrieveContactAutomationEntryCountsResponse404, RetrieveContactBounceLogsMetadataParam, RetrieveContactBounceLogsResponse200, RetrieveContactBounceLogsResponse404, RetrieveContactDataMetadataParam, RetrieveContactDataResponse200, RetrieveContactDataResponse404, RetrieveContactDealsListMetadataParam, RetrieveContactDealsListResponse200, RetrieveContactDealsListResponse404, RetrieveContactDealsMetadataParam, RetrieveContactDealsResponse200, RetrieveContactDealsResponse404, RetrieveContactFieldValuesMetadataParam, RetrieveContactFieldValuesResponse200, RetrieveContactFieldValuesResponse404, RetrieveContactGeoIpsMetadataParam, RetrieveContactGeoIpsResponse200, RetrieveContactGeoIpsResponse404, RetrieveContactGoalsMetadataParam, RetrieveContactGoalsResponse200, RetrieveContactGoalsResponse404, RetrieveContactListMembershipsMetadataParam, RetrieveContactListMembershipsResponse200, RetrieveContactListMembershipsResponse404, RetrieveContactLogsMetadataParam, RetrieveContactLogsResponse200, RetrieveContactLogsResponse404, RetrieveContactNotesMetadataParam, RetrieveContactNotesResponse200, RetrieveContactNotesResponse404, RetrieveContactOrganizationMetadataParam, RetrieveContactOrganizationResponse200, RetrieveContactOrganizationResponse404, RetrieveContactPlusAppendMetadataParam, RetrieveContactPlusAppendResponse200, RetrieveContactPlusAppendResponse404, RetrieveContactTrackingLogsMetadataParam, RetrieveContactTrackingLogsResponse200, RetrieveContactTrackingLogsResponse404, RetrieveEventTrackingStatusResponse200, RetrieveFieldsMetadataParam, RetrieveFieldsResponse200, RetrieveFormsMetadataParam, RetrieveFormsResponse200, RetrieveFormsResponse403, RetrieveInaccessiblePipelinesByUserMetadataParam, RetrieveInaccessiblePipelinesByUserResponse200, RetrieveInaccessiblePipelinesByUserResponse422, RetrieveLinksAssociatedCampaignMetadataParam, RetrieveLinksAssociatedCampaignResponse200, RetrieveLinksAssociatedCampaignResponse404, RetrieveListOfAllNotesResponse200, RetrieveSiteTrackingCodeResponse200, RetrieveSiteTrackingCodeResponse400, RetrieveSiteTrackingStatusResponse200, RetrieveSiteTrackingStatusResponse400, RetrieveVariableMetadataParam, RetrieveVariableResponse200, RetrieveVariableResponse404, SavedResponsesBodyParam, SavedResponsesResponse201, SavedResponsesResponse422, SetConfigMetadataParam, SetConfigResponse200, SetConfigResponse404, SyncAContactsDataBodyParam, SyncAContactsDataResponse201, SyncAContactsDataResponse400, UpdateAAccountNoteBodyParam, UpdateAAccountNoteMetadataParam, UpdateAAccountNoteResponse200, UpdateACalendarFeedBodyParam, UpdateACalendarFeedMetadataParam, UpdateACalendarFeedResponse200, UpdateAContactNewBodyParam, UpdateAContactNewMetadataParam, UpdateAContactNewResponse200, UpdateAContactNewResponse404, UpdateACustomDealFieldMetaBodyParam, UpdateACustomDealFieldMetaMetadataParam, UpdateACustomDealFieldMetaResponse200, UpdateACustomDealFieldMetaResponse404, UpdateACustomDealFieldValueBodyParam, UpdateACustomDealFieldValueMetadataParam, UpdateACustomDealFieldValueResponse200, UpdateACustomDealFieldValueResponse404, UpdateACustomDealFieldValueResponse422, UpdateACustomFieldBodyParam, UpdateACustomFieldMetadataParam, UpdateACustomFieldResponse200, UpdateACustomFieldResponse404, UpdateACustomFieldValueBodyParam, UpdateACustomFieldValueForContactBodyParam, UpdateACustomFieldValueForContactMetadataParam, UpdateACustomFieldValueForContactResponse200, UpdateACustomFieldValueForContactResponse400, UpdateACustomFieldValueMetadataParam, UpdateACustomFieldValueResponse200, UpdateACustomFieldValueResponse404, UpdateADealNewBodyParam, UpdateADealNewMetadataParam, UpdateADealNewResponse200, UpdateADealNewResponse400, UpdateADealNoteBodyParam, UpdateADealNoteMetadataParam, UpdateADealNoteResponse200, UpdateADealStageBodyParam, UpdateADealStageMetadataParam, UpdateADealStageResponse200, UpdateADealStageResponse400, UpdateADealTaskTypeBodyParam, UpdateADealTaskTypeMetadataParam, UpdateADealTaskTypeResponse200, UpdateADealTaskTypeResponse400, UpdateAFieldBodyParam, UpdateAFieldMetadataParam, UpdateAFieldResponse200, UpdateAFieldResponse403, UpdateAGroupBodyParam, UpdateAGroupMetadataParam, UpdateAGroupResponse200, UpdateAGroupResponse403, UpdateAMessageMetadataParam, UpdateAMessageResponse200, UpdateAMessageResponse404, UpdateANoteBodyParam, UpdateANoteMetadataParam, UpdateANoteResponse200, UpdateANoteResponse403, UpdateAPipelineBodyParam, UpdateAPipelineMetadataParam, UpdateAPipelineResponse200, UpdateAPipelineResponse400, UpdateASavedResponseBodyParam, UpdateASavedResponseMetadataParam, UpdateASavedResponseResponse200, UpdateASavedResponseResponse422, UpdateASchemaBodyParam, UpdateASchemaMetadataParam, UpdateASchemaResponse200, UpdateASchemaResponse404, UpdateASchemaResponse422, UpdateASecondaryContactBodyParam, UpdateASecondaryContactMetadataParam, UpdateASecondaryContactResponse200, UpdateASecondaryContactResponse404, UpdateASecondaryContactResponse422, UpdateATagBodyParam, UpdateATagMetadataParam, UpdateATagResponse200, UpdateATaskOutcome1BodyParam, UpdateATaskOutcome1MetadataParam, UpdateATaskOutcome1Response200, UpdateATaskOutcome1Response400, UpdateATaskOutcome1Response422, UpdateATaskOutcomeBodyParam, UpdateATaskOutcomeMetadataParam, UpdateATaskOutcomeResponse200, UpdateATaskOutcomeResponse422, UpdateAnAccountNewBodyParam, UpdateAnAccountNewMetadataParam, UpdateAnAccountNewResponse200, UpdateAnAccountNewResponse400, UpdateAnAddressBodyParam, UpdateAnAddressMetadataParam, UpdateAnAddressResponse200, UpdateAnAddressResponse404, UpdateAnAssociation1BodyParam, UpdateAnAssociation1MetadataParam, UpdateAnAssociation1Response200, UpdateBrandingBodyParam, UpdateBrandingMetadataParam, UpdateBrandingResponse200, UpdateBrandingResponse400, UpdateConnectionBodyParam, UpdateConnectionMetadataParam, UpdateConnectionResponse200, UpdateConnectionResponse400, UpdateCustomFieldFieldGroupBodyParam, UpdateCustomFieldFieldGroupMetadataParam, UpdateCustomFieldFieldGroupResponse200, UpdateCustomFieldFieldGroupResponse403, UpdateCustomFieldFieldGroupResponse404, UpdateCustomFieldFieldGroupResponse422, UpdateCustomerBodyParam, UpdateCustomerMetadataParam, UpdateCustomerResponse200, UpdateListStatusForContactBodyParam, UpdateListStatusForContactResponse200, UpdateListStatusForContactResponse400, UpdateOrderBodyParam, UpdateOrderMetadataParam, UpdateOrderResponse200, UpdateTaskBodyParam, UpdateTaskMetadataParam, UpdateTaskResponse201, UpdateTaskResponse400, UpdateUserBodyParam, UpdateUserMetadataParam, UpdateUserResponse200, UpdateUserResponse400, UpdateWebhookBodyParam, UpdateWebhookMetadataParam, UpdateWebhookResponse200, UpdateWebhookResponse400 } from './types';
