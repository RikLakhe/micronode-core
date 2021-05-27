import _ from 'lodash'

const formatGraphQLErrors=error=>{
    const errorDetails = _.get(error,"originalError.response.data");

    if(errorDetails?.error) {
        return errorDetails.error;
    }else{
        return {
            code: 500,
            message: "Server Error"
        }
    }
}

export default formatGraphQLErrors;
