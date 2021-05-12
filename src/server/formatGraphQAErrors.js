import _ from 'lodash'

const formatGraphQLErrors=error=>{
    const errorDetails = _.get(error,"originalError.response.data");
    console.log("errorDetails",JSON.parse(errorDetails));
    try{
        if(errorDetails) return JSON.parse(errorDetails);
    }catch (e){
        return error;
    }
}

export default formatGraphQLErrors;
