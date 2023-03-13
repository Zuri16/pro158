AFRAME.registerComponent("cursor-x", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents()
    },
  
    handlePlacesListState: function () {
      const id = this.el.getAttribute("id");
      const placesId = ["comic25", "comic26", "comic27", "comic28"];
      if (placesId.includes(id)) {
        const placeContainer = document.querySelector("#places-container");
        placeContainer.setAttribute("cursor-x", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "black",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      this.el.addEventListener("mouseenter", () => {
        console.log("hola")
        this.handlePlacesListState();
        
      });
    },
    handleMouseLeaveEvents: function () {
      this.el.addEventListener("mouseleave",()=>{
        const {selectedItemId}=this.data
        if(selectedItemId){
          const num=document.querySelector(`#${selectedItemId}`)
          const idnum=num.getAttribute("id")
          if(selectedItemId === idnum){
            num.setAttribute("material",{
              color:"#8F54EA",
              opacity:"1"
            })
          }
        }
      })
      
    },
  });