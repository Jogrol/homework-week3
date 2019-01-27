export const addModel = () => {
    return {
        type: 'ADD_MODEL',
        payload:{
            manufacturer: this.state.model,
            year: 1990,
            origin: "some text field"
        }
    }
}