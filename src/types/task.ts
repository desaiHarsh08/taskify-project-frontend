
import Priority from "@/types/priority";
import TaskStatus from "./task-status";

export interface ColTable {
    readonly id?: number | null | undefined;
    columnId?: number,
    textValue: string | null;
    dateValue: string | null | Date;
    booleanValue: boolean | null;
    createdAt?: Date | string | string;
    updatedAt?: Date | null | string;
}

export interface ColumnVariant {
    readonly id?: number | null | undefined;
    columnVariantTemplateId: number | null | undefined;
    numberValue: number | null;
    textValue: string | null;
    dateValue: string | null | Date;
    booleanValue: boolean | null;
    createdAt?: Date | string | string;
    updatedAt?: Date | null | string;

}

export interface RowTable {
    readonly id?: number | null | undefined;
    columnId?: number
    colTables?: ColTable[];
    createdAt?: Date | string | string;
    updatedAt?: Date | null | string;
}

export interface Column {
    readonly id?: number | null | undefined;
    columnTemplateId: number | null | undefined;
    fieldId?: number | null | undefined;
    dropdownTemplateId?: number | null;
    columnVariants: ColumnVariant[];
    rowTables: RowTable[]
    numberValue: number | null;
    textValue: string | null;
    dateValue: string | null;
    booleanValue: boolean | null;
    filePaths?: string[];
    multipartFiles?: File[] | null,
    createdAt?: Date | string | string;
    updatedAt?: Date | null | string;
}

export interface Field {
    readonly id?: number | null | undefined;
    fieldTemplateId: number | null;
    functionId?: number | null | undefined;
    createdByUserId: number | null | undefined;
    closedByUserId?: number | null | undefined;
    columns: Column[];
    createdAt?: Date | string;
    updatedAt?: Date | null | string;
    closedAt?: Date | null | string;
}


export interface Function {
    readonly id?: number | null | undefined;
    functionTemplateId: number | null | undefined;
    taskId?: number | null | undefined;
    createdByUserId: number | null | undefined;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    dropdownTemplateId?: null | number
    dueDate: Date | string;
    closedByUserId?: number | null | undefined;
    closedAt?: Date | null | string;
    fields: Field[];
    remarks?: string;
    filePaths?: string[];
    multipartFiles?: File[],
}



export default interface Task {
    readonly id?: number;
    taskTemplateId: number | null | undefined;
    customerId: number;
    priorityType: Priority;
    createdByUserId: number | null | undefined;
    assignedToUserId: number | null | undefined;
    createdDate?: Date | string;
    closedByUserId?: number | null;
    closedAt?: Date | null;
    dropdownTemplateId?: null | number;
    functions?: Function[];
    abbreviation?: string;
    pumpType: string | null;
    pumpManufacturer: string | null;
    specifications: string | null;
    requirements: string | null;
    problemDescription: string | null;
    archived?: boolean;
    status: TaskStatus;
    customerName: string;
    jobNumber: string;
    createdAt?: Date | null | string | undefined;
    updatedAt?: Date | null | string | undefined;
}