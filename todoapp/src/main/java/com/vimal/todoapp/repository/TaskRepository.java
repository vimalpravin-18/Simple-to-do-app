package com.vimal.todoapp.repository;

import com.vimal.todoapp.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}