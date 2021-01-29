class NoteInfo {

    private _note_id: number;
    private _note_title: string;
    private _note_text: string;

    constructor(note_id: number, note_title: string, note_text: string) {
        this._note_id = note_id;
        this._note_title = note_title;
        this.note_text = note_text;
    }

    public get note_id(): number {
        return this._note_id;
    }

    public set note_id(value: number) {
        this._note_id = value;
    }

    public get note_title(): string {
        return this._note_title;
    }

    public set note_title(value: string) {
        this._note_title = value;
    }

    public get note_text(): string {
        return this._note_text;
    }

    public set note_text(value: string) {
        this._note_text = value;
    }

}

let noteOne = new NoteInfo(1, "Typescript", "Interfaces and Classes");
console.log(noteOne.note_text);
noteOne.note_text = "Getter and Setter methods";
console.log(noteOne.note_text);

// static fields
class CourseUnit {

    static _courseCode: number = 3233223;

    public static printCourseCode(): number {
        return this._courseCode;
    }
}

console.log(CourseUnit.printCourseCode());

CourseUnit._courseCode = 545534;

console.log(CourseUnit.printCourseCode());