function ShowSlot(slotId) {
    const slot = document.getElementById(slotId);
    if (slot.style.display === "none") {
        slot.style.display = "block";
    } else {
        slot.style.display = "none";
    }
}
