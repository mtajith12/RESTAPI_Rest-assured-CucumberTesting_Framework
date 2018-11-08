package com.centrica.assetTracking.tests.utilities;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.BeforeClass;
import static com.centrica.assetTracking.config.Endpoint.GET_OAUTH_TOKEN;
import static io.restassured.RestAssured.get;
import static io.restassured.RestAssured.given;

public class BaseClass {
    //Global Setup Variables
    public static String path;
    public static String jsonPathTerm;
    public static String OAUTH_TOKEN = "";
    public static final String propertyFilePath= "C:\\Users\\mt000a\\IdeaProjects\\Asset_tracking_RESTAPITesting_Framework\\src\\main\\java\\com\\centrica\\assetTracking\\config\\Configuation.properties";
    private static Response response;
    @BeforeClass
    public static void setup() {
        // Set Base URI
        setBaseURI();
        JsonPath token = given()
                .formParam("client_id", "4cf503aa-b4c8-4133-b30e-c00c418b70eb")
                .formParam("client_secret", "9004d123-4aa9-49be-a07e-591bf285badc")
                .formParam("grant_type", "password")
                .formParam("scope", "test_data")
                .formParam("username", "mt000a")
                .formParam("password", "Api@2611")
                .when()
                .post("/auth/oauth/v2/token")
                .andReturn()
                .jsonPath();

        OAUTH_TOKEN = token.getString("access_token");

        System.out.println(OAUTH_TOKEN);

    }
    /**
     * This method helps to Setting Base URI
     * @version 1.0
     * @author mt000a
     */

    public static void setBaseURI() {

        RestAssured.baseURI = PropertiesLoader.getData("baseURI",propertyFilePath);
        RestAssured.enableLoggingOfRequestAndResponseIfValidationFails();
       // System.out.println("RestAssured.baseURI :" +RestAssured.baseURI);
    }

    /**
     * This method helps to Sets base path
     * @version 1.0
     * @author mt000a
     */
    public static void setBasePath(String basePathTerm) {

        RestAssured.basePath = basePathTerm;
    }


    /**
     * This method helps to Reset Base URI (after test)
     * @version 1.0
     * @author mt000a
     */

    public static void resetBaseURI() {

        RestAssured.baseURI = null;
    }


    /**
     * This method helps to Reset base path
     * @version 1.0
     * @author mt000a
     */

    public static void resetBasePath() {

        RestAssured.basePath = null;
    }

    /**
     * This method helps to Sets ContentType
     * @version 1.0
     * @author mt000a
     */

    public static void setContentType(ContentType Type) {

        given().contentType(Type);
    }

    /**
     * This method helps to Sets Json path term
     * @version 1.0
     * @author mt000a
     */

    public static void setJsonPathTerm(String jsonPath) {

        jsonPathTerm = jsonPath;
    }

    /**
     * This method helps to Created search query path
     * @version 1.0
     * @author mt000a
     */

    public static void createSearchQueryPath(String searchTerm, String param, String paramValue) {
        path = searchTerm + "/" + jsonPathTerm + "?" + param + "=" + paramValue;
    }


    /**
     * This method Returns response
     * @version 1.0
     * @author mt000a
     */
    public static Response getResponse() {
        //System.out.print("path: " + path +"\n");
        return get(path);
    }

    /**
     * This method Returns JsonPath object
     * @version 1.0
     * @author mt000a
     */

    public static JsonPath getJsonPath(Response res) {
        String json = res.asString();
        //System.out.print("returned json: " + json +"\n");
        return new JsonPath(json);
    }

    /**
     * This method Returns Oauth2 token
     * @version 1.0
     * @author mt000a
     */
    public String getOauthToken() {
        setBaseURI();

     //  ProxySpecification ps = new ProxySpecification("http://proxy.fjgslbdmz.uk.centricaplc.com",80,"","mt000a","Redmi@2611%");
        response = given()
                .formParam("client_id", "4cf503aa-b4c8-4133-b30e-c00c418b70eb")
                .formParam("client_secret", "9004d123-4aa9-49be-a07e-591bf285badc")
                .formParam("grant_type", "password")
                .formParam("scope", "test_data")
                .formParam("username", "mt000a")
                .formParam("password", "Api@2611")
                .when()
                .post(GET_OAUTH_TOKEN)
                .andReturn();
        response.prettyPrint();
        JsonPath token = getJsonPath(response);
        OAUTH_TOKEN = token.getString("access_token");
       // System.out.println("OAUTH_TOKEN : " +OAUTH_TOKEN);
        return OAUTH_TOKEN;
    }



}