window.addEventListener("message", function(event) {
    if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmit') {
        console.log(event.data);
        formData = event.data.data;
        const formObj = formData.reduce((acc, curr) => {
            acc[curr.name] = curr.value;
            return acc;
        }, {});
        window.dataLayer.push({
            'event': 'hubspot-form-success',
            'hs-form-guid': event.data.id,
            'email': formObj.email,
            'phone': formObj.phone,
            'first_name': formObj.firstname,
            'last_name': formObj.lastname
        });
    }
});
