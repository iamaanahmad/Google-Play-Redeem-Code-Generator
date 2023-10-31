<script>
  /* Your JavaScript code here */ 
  document.getElementById("whatsappShareButton").addEventListener("click", () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Check out this Random Value Generator!");
    const whatsappUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
    window.open(whatsappUrl, "_blank");
</script>
<script>
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const hyphenPositions = [4, 9, 14, 19];

  function getRandomCharacter() {
    return characters[Math.floor(Math.random() * characters.length)];
  }

  function generateRandomValue() {
    const valueArray = [];
    for (let i = 0; i < 24; i++) {
      if (hyphenPositions.includes(i)) {
        valueArray.push("-");
      } else {
        valueArray.push(getRandomCharacter());
      }
    }
    return valueArray.join("");
  }

  document.getElementById("generateButton").addEventListener("click", () => {
    const generatedValue = generateRandomValue();
    document.getElementById("generatedValue").textContent = generatedValue;
  });

  document.getElementById("copyButton").addEventListener("click", () => {
    const generatedValue = document.getElementById("generatedValue").textContent;
    const textarea = document.createElement("textarea");
    textarea.value = generatedValue;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Redeem Code Copied : " + generatedValue);
  });
 
</script>
