package com.centrica.assetTracking.config;

public class Endpoint {

public static final String GET_ADDRESS_BY_POSTCODE = "/mobile/customerinfo/v2/address/{id}";
public static final String GET_POSTCODE_LOOKUP ="/mobile/customerinfo/v2/postcode/{postcode}";
public static final String GET_BOILERINFO_BY_CRN = "/boilerinfo/v2/boiler/crn/911000784564";
public static final String GET_OAUTH_TOKEN = "/auth/oauth/v2/token";


//#---------------------IVR Endpoints-----------------------
public static final String GET_CUSTOMER_BY_PHONENO = "/ivr/v1/customers/phone/00447778889994";
public static final String GET_CUSTOMER_BY_CUSTOMERID = "/ivr/v1/customer/3000083750";
public static final String GET_CUSTOMER_BY_ACCOUNTNO = "/ivr/v1/customers/account/850040644543";

}
