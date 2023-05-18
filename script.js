function calculateOffers() {
    let arv = parseFloat(document.getElementById("arv").value.replace(/[^0-9.]/g, ""));
    let repairCost = parseFloat(document.getElementById("repairCost").value.replace(/[^0-9.]/g, ""));
    let assignmentFee = parseFloat(document.getElementById("assignmentFee").value.replace(/[^0-9.]/g, ""));

    // If the parsed values are NaN, set them to 0
    arv = isNaN(arv) ? 0 : arv;
    repairCost = isNaN(repairCost) ? 0 : repairCost;
    assignmentFee = isNaN(assignmentFee) ? 0 : assignmentFee;

    let minOffer = (arv * 0.6) - repairCost - assignmentFee;
    let midOffer = (arv * 0.65) - repairCost - assignmentFee;
    let maxOffer = (arv * 0.7) - repairCost - assignmentFee;

    document.getElementById("minOffer").value = "$" + minOffer.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("midOffer").value = "$" + midOffer.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("maxOffer").value = "$" + maxOffer.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
