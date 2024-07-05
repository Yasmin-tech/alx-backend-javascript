namespace Subjects {

	export class Subject {
		// firstName: string;
		// lastName: string;
		teacher: Subjects.Teacher

		set setTeacher(teacher: Subjects.Teacher) {
			this.teacher = {...teacher};
		}
	}
}
