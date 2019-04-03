import { environment } from '../../environments/environment';
import { $ } from 'protractor';

export  class API_ENDPOINTS_SETTING {

    public get ADMIN_MODULE(){
        return "admin";
    }

    public get CONFIG(){
        return "config";
    }

    public get LINE_DATABASE() {
        return environment.WEBAPI_LINEDATABASE_ENDPOINT;
    } 

    public get IT_REPORTER() {
        return environment.WEBAPI_ITREPORTER_ENDPOINT;
    } 

    public get CONNECTIVITY_PROVIDER_TYPE() {
        return  `${this.CONFIG}/connectivityprovidertypes`;
    } 
    
    public get CONNECTIVITY_CATEGORY() {
        return `${this.CONFIG}/connectivitycategories`;
    } 
    
    public get SERVICE_TYPE() {
        return  `${this.CONFIG}/servicetypes`;
    } 

    public get SERVICE_CLASS() {
        return  `${this.CONFIG}/serviceclasses`;
    } 

    public get REQUEST() {
        return  `requests`;
    } 

    public get FIELD_REQUEST() {
        return  'fieldrequests'; 
    } 

    public get FIELD_REQUEST_FORM_VIEW_MODEL() {
        return   `form-configuration`;
    } 

    public get LINE_REQUEST() {
        return  'linerequests';
    } 

    public get LINE_REQUEST_FORM_VIEW_MODEL() {
        return   `${this.LINE_REQUEST}/form-configuration`;
    } 
    
    public get SUPPLIERS() {
        return  `${this.CONFIG}/suppliers`;
    } 

    public get PROVIDERS() {
        return  `${this.CONFIG}/providers`;
    } 

    public get COUNTRIES() {
        return  `${this.CONFIG}/countries`;
    } 
    
    public get ROUTERS() {
        return  `${this.CONFIG}/routers`;
    } 
    
    public get PRODUCT_LINES() {
        return  `${this.CONFIG}/productlines`;
    } 

    public get SUBPRODUCT_LINES() {
        return  `/${this.PRODUCT_LINES}/{ID}/subproductlines`;
    } 

    public get SUBPRODUCT_LINES_ROUTE() {
        return  `admin/productlines/{ID}/subproductlines`;
    }
    
    public get RIG_TYPE() {
        return `${this.CONFIG}/rigtypes`;
    } 

    public get RIG() {
        return `${this.CONFIG}/rigs`;
    } 

    public get SATELLITE_SERVICE() {
        return `${this.CONFIG}/satelliteservices`;
    } 

    public get PROVIDER_WORKORDERS() {
        return `${this.CONFIG}/workorders`;
    } 

    public get CONNECTIVITY_TYPE() {
        return `${this.CONFIG}/connectivitytypes`;
    } 

    public get NETWORK() {
        return `${this.CONFIG}/networks`;
    } 

    public get ADMIN_GROUPS() {
        return `${this.ADMIN_MODULE}/groups`;
    } 

    public get ADMIN_GROUPS_USERS() {
        return `${this.ADMIN_MODULE}/groups/{ID}/users`
    }
}
