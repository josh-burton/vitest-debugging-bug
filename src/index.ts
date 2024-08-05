import {myFunction} from "my_dependency/src/repository/my_repository";

export function testedFunction(): boolean {
    console.log("tested function");
    return myFunction();
}
