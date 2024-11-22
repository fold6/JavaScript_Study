import { IValuable, printValueT } from "./printValueT";
import { Valueable } from "./Valuable";

printValueT(new Valueable(1)); //1
printValueT({ value: true }); //true
