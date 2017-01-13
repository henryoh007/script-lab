import { Action } from '@ngrx/store';
import { type } from '../helpers';
import { Subscription } from 'rxjs/Subscription';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export class GitHubActionTypes {
    static readonly LOGIN = type('[GitHub] Login');
    static readonly IS_LOGGED_IN = type('[Github] Is Logged In');
    static readonly LOAD_GISTS = type('[Github] Load Gists');
    static readonly LOAD_GISTS_SUCCESS = type('[Github] Load Gists Success');
    static readonly LOGGED_IN = type('[GitHub] Logged In');
    static readonly LOGGED_OUT = type('[GitHub] Logged Out');
    static readonly SHARE_PUBLIC_GIST = type('[GitHub] Share Public Gist');
    static readonly SHARE_PRIVATE_GIST = type('[GitHub] Share Private Gist');
    static readonly SHARE_COPY = type('[GitHub] Share Copy');
    static readonly SHARE_SUCCESS = type('[GitHub] Share Success');
    static readonly UDPATE_GIST = type('[GitHub] Update Gist');
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class LoginAction implements Action {
    readonly type = GitHubActionTypes.LOGIN;

    constructor() { }
}

export class LogoutAction implements Action {
    readonly type = GitHubActionTypes.LOGGED_OUT;

    constructor() { }
}

export class IsLoggedInAction implements Action {
    readonly type = GitHubActionTypes.IS_LOGGED_IN;

    constructor() { }
}

export class LoadGistsAction implements Action {
    readonly type = GitHubActionTypes.LOAD_GISTS;

    constructor() { }
}

export class LoadGistsSuccessAction implements Action {
    readonly type = GitHubActionTypes.LOAD_GISTS_SUCCESS;

    constructor(public payload: ISnippet[]) { }
}

export class LoggedInAction implements Action {
    readonly type = GitHubActionTypes.LOGGED_IN;

    constructor(public payload: IBasicProfile) { }
}

export class ShareCopyGistAction implements Action {
    readonly type = GitHubActionTypes.SHARE_COPY;

    constructor(public payload: ISnippet) { }
}

export class SharePublicGistAction implements Action {
    readonly type = GitHubActionTypes.SHARE_PUBLIC_GIST;

    constructor(public payload: ISnippet) { }
}

export class SharePrivateGistAction implements Action {
    readonly type = GitHubActionTypes.SHARE_PRIVATE_GIST;

    constructor(public payload: ISnippet) { }
}

export class ShareSuccessAction implements Action {
    readonly type = GitHubActionTypes.SHARE_SUCCESS;

    constructor(public payload: IGist) { }
}

export class UpdateGistAction implements Action {
    readonly type = GitHubActionTypes.UDPATE_GIST;

    constructor(public payload: ISnippet) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type GitHubActions
    = LoginAction
    | LoggedInAction
    | LoadGistsAction
    | LoadGistsSuccessAction
    | IsLoggedInAction
    | LogoutAction
    | ShareCopyGistAction
    | SharePrivateGistAction
    | SharePublicGistAction
    | ShareSuccessAction
    | UpdateGistAction;
