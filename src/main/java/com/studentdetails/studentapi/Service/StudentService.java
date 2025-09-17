package com.studentdetails.studentapi.Service;

import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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
    
    public Student getByName (String name) {
        return studentRepo.findByName(name).orElse(null);
    }

    public Student addStudent(Student student,MultipartFile img) throws IOException{
        student.setImg(img.getBytes());
        return studentRepo.save(student);
    }

    public Student delStudent (int id) {
        Student student = studentRepo.findById(id).orElse(null);
        if(student==null)
            return null;
        studentRepo.deleteById(id);
        return student;
    }

    public Student updateStudent (int id) {
        Student student = studentRepo.findById(id).orElse(null);
        return student;
    }
}
