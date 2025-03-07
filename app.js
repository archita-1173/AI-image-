const API_KEY="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"

const submitIcon= document.querySelector("#submit-icon");
 const inputElement=document.querySelector("input")
 const imageSection= document.querySelector('.images-section')
const getImages= async()=>{
    const options={
        method: "POST",
        headers:{
            "Authorization": 'Bearer ${API_KEY}',
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            "prompt": inputElement.value,
            "n": 4,
            "size": "1024x1024"
        })
    
        
        
    }
    try{
         const response=await fetch('https://api.openai.com/v1/images/generations',options)
         const data= await response.json()
         console.log(data)

         data?.data.forEach(imageObject => {
            const ImageContainer= document.createElement('div')
            ImageContainer.classList.add('image-container')
            const imageElement= document.createElement('img')
            imageElement.setAttribute('src', imageObject.url)
            ImageContainer.append(imageElement)
            imageSection.append(ImageContainer)

            
         });

    }catch(error){
        console.error(error)
    }
}


submitIcon.addEventListener('click',getImages)