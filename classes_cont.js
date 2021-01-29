class NoteInfo {
    constructor(note_id, note_title, note_text) {
        this._note_id = note_id;
        this._note_title = note_title;
        this.note_text = note_text;
    }
    get note_id() {
        return this._note_id;
    }
    set note_id(value) {
        this._note_id = value;
    }
    get note_title() {
        return this._note_title;
    }
    set note_title(value) {
        this._note_title = value;
    }
    get note_text() {
        return this._note_text;
    }
    set note_text(value) {
        this._note_text = value;
    }
}
let noteOne = new NoteInfo(1, "Typescript", "Interfaces and Classes");
console.log(noteOne.note_text);
noteOne.note_text = "Getter and Setter methods";
console.log(noteOne.note_text);
// static fields
class CourseUnit {
    static printCourseCode() {
        return this._courseCode;
    }
}
CourseUnit._courseCode = 3233223;
console.log(CourseUnit.printCourseCode());
CourseUnit._courseCode = 545534;
console.log(CourseUnit.printCourseCode());
