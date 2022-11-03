import { Action } from "../actions";
import { ActionType } from "../actions_types";

interface RepositoriesState {
    loading:boolean;
    error:string | null;
    data:string[];
}

const initialState = {
    loading:false,
    error:null,
    data:[]
}

const repositoriesReducer = (state:RepositoriesState = initialState, action:Action):RepositoriesState => {
    switch(action.type){
        case ActionType.SEARCH_REPOSITORY:
            return {loading:true, error:null, data:[]}
        case ActionType.SEARCH_REPOSITORY_SUCCESS:
            return {loading:false, error:null, data: action.payload}
        case ActionType.SEARCH_REPOSITORY_ERROR:
            return {loading:false, error:action.payload, data:[]}
        default:
            return state
    }
}

export default repositoriesReducer