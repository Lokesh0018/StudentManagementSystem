package com.studentdetails.studentapi.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.studentdetails.studentapi.Entity.Student;

public interface StudentRepo extends JpaRepository<Student,Integer>{
    
    public Optional<Student> findByName(String name);
    public long countByBranch(String branch);
}
