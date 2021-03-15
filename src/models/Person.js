export default class Person {
    constructor(
        name = "",
        profession = "",
        birth_date = "",
        age = "",
        email = "",
        about_me = "",
        residence = "",
        address = "",
        services = {title: "", description: ""},
        experience = [],
        education = [],
        knowledge = [],
        language = []
    ) {
        this.name = name;
        this.profession = profession;
        this.birth_date = birth_date;
        this.age = age;
        this.email = email;
        this.about_me = about_me;
        this.residence = residence;
        this.address = address;
        this.services = services;
        this.experience = experience;
        this.education = education;
        this.knowledge = knowledge;
        this.language = language;
    }
}
