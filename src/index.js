fetch("https://dog.ceo/api/breeds/image/random/4")
  .then((res) => res.json())
  .then((data) => addImgs(data))

  function addImgs(fromUrlObj) {
    const addImgs = document.querySelector('#dog-image-container')
    //console.log(addImgs)
    urlObjToArr = fromUrlObj.message
    //console.log(urlObjToArr)

    urlObjToArr.forEach((url) => {
      const makeImgElement = document.createElement('img')
      //console.log(addImgElement)
      makeImgElement.src = url
      addImgs.appendChild(makeImgElement)
      //console.log(addImgs.appendChild(makeImgElement))
    })
  }

  fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((data) => addDogBreeds(data))

  function addDogBreeds(fromObjList) {
    //console.log(fromObjList)
    breedObjList = fromObjList.message
    //console.log(breedObjList)

    breedObjToArr = Object.keys(breedObjList)
    //console.log(breedObjToArr)

    const collectBreeds = document.querySelector('#dog-breeds')
    //console.log(listOfBreeds)

    breedObjToArr.forEach((breed) => {
      const makeBreedsList = document.createElement('li') //Should shorten elements created to li or img!!
      //console.log(breedsList)
      makeBreedsList.textContent = breed
      //console.log(makeBreedsList)
      collectBreeds.appendChild(makeBreedsList)
      //console.log(collectBreeds)

      makeBreedsList.addEventListener('click', ()  => makeBreedsList.style.color = 'blue')
      //console.log(makeBreedsList.addEventListener)
    })

    const breedDropdown = document.querySelector('#breed-dropdown')
    //console.log(breedDropdown)

    breedDropdown.addEventListener('change', (e) => selectBreed(e))
    //console.log(breedDropdown.addEventListener)

    function selectBreed(e) {
      collectBreeds.textContent = ""
      const breedFilter = breedObjToArr.filter ((breed) => {
        if (breed.charAt(0) === e.target.value) {
          return true
        }
        else {
          return false
        }
      })

      breedFilter.forEach((breed) => {
        const li = document.createElement('li')
        li.textContent = breed
        collectBreeds.appendChild(li)

        li.addEventListener('click', () => li.style.color = 'blue')
      })
    }
  }    







