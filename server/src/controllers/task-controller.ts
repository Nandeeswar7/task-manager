import {JsonController, Get, Post, Param, Delete, Body} from "routing-controllers";
interface returnType {
    message: string
}

interface Task {
    title: string
}

@JsonController('/tasks')
export class TaskController {

    @Get()
    getAll(): returnType {
        return {
            message: "Getting all tasks",
        };
    }

    @Get('/:id')
    getOne(@Param('id') id: number ): returnType {
        return {
            message: `Getting task ${id}`,
        };
    }

    @Post()
    createOne(@Body() task: Task): returnType {
        return {
            message: `${task.title} created`,
        };
    }

    @Delete('/:id')
    deleteOne(@Param('id') id: number ): returnType {
        return {
            message: `Deleted task ${id}`,
        };
    }
}
