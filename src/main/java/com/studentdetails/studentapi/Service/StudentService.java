package com.studentdetails.studentapi.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import com.studentdetails.studentapi.Entity.Student;
import com.studentdetails.studentapi.Repo.StudentRepo;

@Component
@Service
public class StudentService {
    @Autowired
    StudentRepo studentRepo;

    public List<Student> getAll(){
        return studentRepo.findAll();
    }

    public Student getById(int id){
        return studentRepo.findById(id).orElse(null);
    }
    
}
