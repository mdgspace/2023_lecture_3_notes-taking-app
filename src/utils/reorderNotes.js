const reorderNotes = (arr) => {
    const pinned = [];
    const unpinned = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isPin) pinned.push(arr[i]);
        else unpinned.push(arr[i]);
    }
    return [...pinned, ...unpinned];
};

export default reorderNotes