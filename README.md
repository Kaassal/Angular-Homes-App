# Angular-Homes-App
The basic angular tutorial application with some fixes, made to work with angular 17

### Implemented updates 

- **Added http requests!:** 

Please note that for this proyect to work locally the local json server must be running, it is also possible for your url to differ so run the following commands.

This command will install json server, if you already have it does not need to be run, however it will most likely not hurt anything

```
npm install -g json-server
```

Now run

```
json-server --watch db.json
```

Make sure to change db.json to the actual name of your .json file **if** you do change it

If your URL is anything other than **http://localhost:3000**, change it in **housing.service.ts** by doing this 

```
export class HousingService {

  constructor() { }
    url = 'your_url_here'

    //existing code is unchanged...
}
```
- **Search bar!:** 
Kinda implemented? It only filters by city. Might add something else later, its very basic, but it works ¯\\\_(ツ)\_/¯ 

### Future updates

- Images: There have been some issues with the images, these have been mentioned on offcial Angular repos, for now a single image is used for all listings. Im looking for a more elegant solution to shoving images into the assets folders, however  this works for now, more investigation is necessary. 
