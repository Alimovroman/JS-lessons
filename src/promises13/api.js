const api = {
    sendStudentsCountToItKamasutra(studentsCount) {
        return axios.post("https://it-kamasutra.com/students-need", 
        { count: studentsCount })
            .then((data) => {
                return data.data
            })
    },
    getVacanciesCountFromMicrosoft() {
        return axios.get("https://microsoft.com")
            .then((data) => {
                return data.data.vacancies
            })
    },
    getVacanciesCountFromGoogle() {
        return axios.get("https://google.com")
            .then((data) => {
                return data.data.vacancies
            })
    }
}