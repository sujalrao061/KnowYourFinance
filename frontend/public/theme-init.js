// Set the saved or system theme before the first paint so there is no light flash.
      try {
        var t = localStorage.getItem("kyf-theme");
        if (t !== "light" && t !== "dark") t = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", t);
      } catch (e) {}
