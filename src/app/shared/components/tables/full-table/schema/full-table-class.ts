import { BehaviorSubject } from "rxjs";
import { IFullTable } from "../ifull-table.metadata";

export class FullTableClass implements IFullTable{
    public initialData = {
        data: [],
        total: 0
    };
    public subjectTable!: BehaviorSubject<{ data: any[] | null, total: number }>;

    getData(): void{};

    get getCurrentItems(): any[] | null {
        return this.subjectTable.value.data;
    };

}
