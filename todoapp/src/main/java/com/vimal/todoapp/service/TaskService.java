package com.vimal.todoapp.service;

import com.vimal.todoapp.exception.ResourceNotFoundException;
import com.vimal.todoapp.model.Task;
import com.vimal.todoapp.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository repo;

    public TaskService(TaskRepository repo) {
        this.repo = repo;
    }

    public List<Task> getAllTasks() {
        return repo.findAll();
    }

    public Task createTask(Task task) {
        return repo.save(task);
    }

    public void deleteTask(Long id) {
        if (!repo.existsById(id)) {
            throw new ResourceNotFoundException("Task not found");
        }
        repo.deleteById(id);
    }

    public Task toggleTask(Long id) {
        Task task = repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found"));

        task.setCompleted(!task.isCompleted());
        return repo.save(task);
    }
}