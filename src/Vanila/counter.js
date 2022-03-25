let count = 0
function Increment() {
    // 1. Picking DOM ref
    const countObj = document.getElementById('count');

    // 2. Logic
    count = parseInt(countObj.innerHTML, 10);
    count += 1

    // 3. Logic
    countObj.innerHTML = count;
}


/**
 * Pros
 * - Looks very simple.
 */

/**
 * Cons
 * - Globals.
 * - Lots of DOM interactions.
 * - Unmanagable With growing code.
 */