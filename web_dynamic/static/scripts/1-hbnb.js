$(document).ready(function () {
    const checkedAmenities = {};
    
    $('input[type="checkbox"]').change(function () {        const amenityId = $(this).data('id');         const amenityName = $(this).data('name'); 
        if ($(this).is(':checked')) {
            checkedAmenities[amenityId] = amenityName;        } else {
            delete checkedAmenities[amenityId];
        }
        
        const amenitiesList = Object.values(checkedAmenities).join(', ');
        $('.amenities h4').text(amenitiesList);
    });
});
