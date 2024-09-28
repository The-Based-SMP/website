// @license http://www.gnu.org/licenses/agpl-3.0.html AGPL-3.0
const status = document.getElementById("copy-status");
status.innerText = "(Click to copy to clipboard)";
document.getElementById("server-ip").addEventListener("click", function () {
    const ip = "based-smp.duckdns.org";
    const tempInput = document.createElement("input");
    tempInput.value = ip;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // message for when ip copied
    const status = document.getElementById("copy-status");
    status.innerText = "(Copied to clipboard)";
    setTimeout(() => {
        status.innerText = "";
    }, 2000);
});
// @license-end
