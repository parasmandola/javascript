
    let history = [[1, 2, 3]];
    let currentIndex = 0;

    function render() {
      const current = history[currentIndex];
      document.getElementById("currentArray").innerText = `[ ${current.join(", ")} ]`;

      const timelineDiv = document.getElementById("timeline");
      timelineDiv.innerHTML = "";

      history.forEach((arr, index) => {
        const div = document.createElement("div");
        div.className = "step" + (index === currentIndex ? " active" : "");
        div.innerText = `[${arr.join(",")}]`;

        div.onclick = () => {
          currentIndex = index;
          render();
        };

        timelineDiv.appendChild(div);
      });
    }

    function saveState(newArr) {
      history = history.slice(0, currentIndex + 1); // cut future states
      history.push(newArr);
      currentIndex++;
      render();
    }

    function addItem() {
      let val = Math.floor(Math.random() * 10);
      let newArr = [...history[currentIndex], val];
      saveState(newArr);
    }

    function removeItem() {
      let newArr = history[currentIndex].slice(0, -1);
      saveState(newArr);
    }

    function doubleValues() {
      let newArr = history[currentIndex].map(x => x * 2);
      saveState(newArr);
    }

    function filterEven() {
      let newArr = history[currentIndex].filter(x => x % 2 === 0);
      saveState(newArr);
    }

    render();