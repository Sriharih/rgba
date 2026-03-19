
        let add=document.getElementById("add")
        let color=document.getElementById("color")
        let bg_clr
        let colors=[]
        let colors_dup=[]

        let add_top=document.getElementById("add_top")
        let remove_top=document.getElementById("remove_top")
        let add_bottom=document.getElementById("add_bottom")
        let remove_bottom=document.getElementById("remove_bottom")
        let step2=document.getElementById("step2")
        //step 1
        add.addEventListener("click",generate)
        function generate()
        {
                let r=Math.floor(Math.random()*256)
                let g=Math.floor(Math.random()*256)
                let b=Math.floor(Math.random()*256)
                bg_clr=`rgb(${r}, ${g}, ${b})`

                color.style.backgroundColor=bg_clr

        }
        //step 2
        //Add colors on array
        add_bottom.addEventListener("click",noteBottom)
        function noteBottom(){
      
            colors.push(bg_clr);

            showColor()
            

        }
        //show colors on list
         let AT_count=0;
        function showColor(){
                AT_count=colors.length-1;
                let p=document.createElement("p")
                p.textContent=colors[AT_count];
                step2.appendChild(p)
        }
        // add top 
        add_top.addEventListener("click",noteTop)
        function noteTop(){
    
             colors.unshift(bg_clr);

             let p=document.createElement("p")
            p.textContent=colors[0];
            step2.prepend(p)
             
        }
        // remove top
       function removeTop(){
        step2.removeChild(step2.firstChild);
         colors.shift()

       }
       // inga remove bottom
       function removeBottom(){
         step2.removeChild(step2.lastChild);
         colors.pop()

       }
      //sorting buttons
      /*
      plan: ipo andha rgba ellam string ah iruku so starting la red array store pannu 
      starting la red array store pannu(also for green and blue)
      ipo red ah vechi plan pannalam , so (after red sort button clicked )first anga iruka content fulla delete pannanum (step oda child)
      next red ah sort pannu 
      then andha red ku equal sort podanum , next colors array ku elements create panni loop la potu append pannu
      avalodha
      */
        //red sort
       let red_sort=document.getElementById("red_sort")
       
       red_sort.addEventListener("click",red_work)
       function red_work()
       {
        function getR(rgbString) {
        const m = rgbString.match(/^\s*rgb\s*\(\s*(\d{1,3})\s*,/i);
        return m ? Number(m[1]) : NaN;
        }
        colors.sort((a, b) => getR(a) - getR(b));
        console.log(colors)
        for(let i=0;i<colors.length;i++)
        {
            step2.removeChild(step2.firstChild);
        }
        for(let i=0;i<colors.length;i++){
            let p=document.createElement("p")
                        p.textContent=colors[i];
                        step2.appendChild(p)
        }
       }
       //green sort
       let green_sort=document.getElementById("green_sort")
       green_sort.addEventListener("click",green_work)
       function green_work()
       {
         function getG(rgbString) {
            const m = rgbString.match(/^\s*rgb\s*\(\s*\d{1,3}\s*,\s*(\d{1,3})\s*,/i);
            return m ? Number(m[1]) : NaN;
            }
            colors.sort((a, b) => getG(a) - getG(b));
            console.log(colors);
            for(let i=0;i<colors.length;i++)
            {
                step2.removeChild(step2.firstChild);
            }
            for(let i=0;i<colors.length;i++)
            {
                let p=document.createElement("p")
                            p.textContent=colors[i];
                            step2.appendChild(p)
            }
       }
   
       //blue sort pannurom
       let blue_sort=document.getElementById("blue_sort")
       blue_sort.addEventListener("click",blue_work)
       function blue_work()
       {
        function getB(rgbString) {
            const m = rgbString.match(/^\s*rgb\s*\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*(\d{1,3})\s*\)\s*$/i);
            return m ? Number(m[1]) : NaN;
        }        
        colors.sort((a, b) => getB(a) - getB(b));
        console.log(colors);
            for(let i=0;i<colors.length;i++)
            {
                step2.removeChild(step2.firstChild);
            }
            for(let i=0;i<colors.length;i++)
            {
                let p=document.createElement("p")
                            p.textContent=colors[i];
                            step2.appendChild(p)
            }
       }
       //ipo namma sorting ah complete pannitom next work old content ah delete pannanum and new content ah podanum
       //similar to the buttons that's it main task over
       //how to delete all the child elements in html in js ? (idha w3 schools la paru)

     //(add-top,add-bottom,remove-top,remove-bottom,sort with red , green and blue all completed and got the sorted array)
     
     //now we are in copy list task
     /*
     IT'S Actually simple 
     plan :   note the start and end value  (start -> index and end -> length )
              ipadi pota podum namma loop la podum bodhu for ex (start->0 and end-> 3)
              then we can easily print the index in thge array 0,1,2 in the right side
              
              step 1 : get the datas from field 
              step 2 : create a element from the colors array 
              step 3 : create a p element with that content and paste it on the output
     */
      // Lets work
      let copy=document.getElementById("copy")
      let copy_start=document.getElementById("copy_start")
      let copy_end=document.getElementById("copy_end")
      let output=document.getElementById("output");

      copy.addEventListener("click",copywork)
      function copywork(){
        output.innerHTML=" "
        let i=copy_start.value;
        let size=copy_end.value;
        copy_start.value=" "
        copy_end.value=" "
        
        console.log("Copy datas Start = "+i+" End = "+size)
        print(i,size)
        
      }
      function print(i,size){
        for(i;i<=size;i++)
        {
            let p=document.createElement("p")
            p.textContent=colors[i];
            output.appendChild(p)
        }
      }
      //copy complete
      //now iam going to working on 
      let move=document.getElementById("move")
      let move_start=document.getElementById("move_start")
      let move_end=document.getElementById("move_end")
      // output
      move.addEventListener("click",movework)
      function movework()
      {
        let i=move_start.value;
        let size=move_end.value;
        // for(i;i<=size;i++)
        // {        let p=document.createElement("p")
        // p.textContent=colors[i];
        // output.appendChild(p)}
        // for(i;i<=size)
         move_start.value=" "
        move_end.value=" "
        dummy=[]
        count=0
        for(i;i<=size;i++){
            dummy[count]=colors[i]
            count++
        }
       arrayRemove()
       
      }
      let match=[]
      function arrayRemove()
      {
        
        for(let i=0;i<colors.length;i++)
        {
            match_count=0
            for(let j=0;j<count;j++)
            {
                if(colors[i]==dummy[j])
                {
                    match[match_count]=i
                    match_count++
                }
            }
            
        }
       const dummySet = new Set(dummy);

        for (let i = colors.length - 1; i >= 0; i--) {
        if (dummySet.has(colors[i])) {
            colors.splice(i, 1);
        }
        }

        console.log(colors); 
        step2.innerHTML=" "
        output.innerHTML=" "
        for(i=0;i<colors.length;i++)
        {
            let p=document.createElement("p")
            p.textContent=colors[i];
            step2.appendChild(p)
        }
        for(i=0;i<dummy.length;i++)
        {
            let p=document.createElement("p")
            p.textContent=dummy[i];
            output.appendChild(p)
        }

      }
    