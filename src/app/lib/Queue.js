import Queue from "bull";
import redisConfig from "../config/redis";


import * as jobs from "../jobs";

console.log("jobs" , jobs)

const queues = Object.values(jobs).map((job) => ({
    bull : new Queue(job.key , redisConfig),
    name : job.key,
    handle : job.handle,
    options : job.options
}))


export default {
    queues,
    add(name , data , priority = 1){
        const queue = this.queues.find(queue => queue.name === name);
        if(!queue){
            throw new Error(`could not find job with name : ${name}`);
        }
        return queue.bull.add(data , queue.options);
    },
    process(){
        return this.queues.forEach(queue => {
            queue.bull.process(queue.handle)
            queue.bull.on("failed" , (job) => {
                console.log("job failed" , queue.name , job.data)            
             })
        })
    }
}

