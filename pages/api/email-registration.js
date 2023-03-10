import path from 'path';
import  fs  from 'fs';

function buildPath() {
    return path.join(process.cwd(), 'data', 'data.json')
}
function extractData (Path) {
    if(!path){
       return console.log("no path")
    }
    try {
        const jsonData = fs.readFileSync(Path);
        const data = JSON.parse(jsonData)
         return data;
    } catch (error) {
        console.log(error)
    }
 
}
const filePath = buildPath();
const {events_categories, allEvents} = extractData(filePath);


export default async function handler(req, res) {
    let modified = false
    const { method } = req;
    if (!events_categories && !allEvents ) {
        return res.status(404).send("no data")
    }
    if (method === "POST") {
        const { email, eventId } = JSON.parse(req.body)
        
    if (!email | !email.includes('@')) {
        res.status(422).json({ message: 'Invalid email address' });
      }
  
        const newAllevents = allEvents.map(ev => {
            if(ev.id === eventId) {
                if(ev.emails_registered.includes(email)){
                    res.status(409).json({message: 'this email has already been registered'})
                    return ev
                }
                     modified = true
                    return {
                    ...ev, emails_registered:[...ev.emails_registered, email]
                  
                }
            }
            return ev
        });
        
        if(modified){
            fs.writeFileSync(filePath, JSON.stringify({events_categories, allEvents: newAllevents}))
            res.status(201).json({
                message: `succeful, ${email} you have been suceefull registered for  ${eventId}`
            });
            modified = false

        }
      
       
    }
   
}

// -----------my way ----------

// const jsonDirectory = path.join(process.cwd(), 'json');
// const fileContents = await fs.readFile(jsonDirectory + '../../data/data.json', 'utf8');
// // res.status(200).json(fileContents);
// console.log(JSON.parse(fileContents).events_categories)