package com.studentdetails.studentapi.Service;

import java.io.IOException;
import java.util.HashMap;
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

    public List<Student> getAll() {
        List<Student> students = studentRepo.findAll();
        for (Student s : students) {
            s.setImageUrl("http://localhost:8081/image/" + s.getId());
            studentRepo.save(s);
        }
        return students;
    }

    public Student getById(int id) {
        return studentRepo.findById(id).orElse(null);
    }

    public Student getByName(String name) {
        Student student = studentRepo.findByName(name).orElse(null);
        student.setImageUrl("http://localhost:8081/image/"+student.getId());
        return student;
    }

    public Student addStudent(Student student, MultipartFile img) throws IOException {
        student.setImg(img.getBytes());
        return studentRepo.save(student);
    }

    public Student delStudent(int id) {
        Student student = studentRepo.findById(id).orElse(null);
        if (student == null)
            return null;
        studentRepo.deleteById(id);
        return student;
    }

    public Student updateStudent(int id,Student student, MultipartFile img) throws Exception {
        Student update = studentRepo.findById(id).orElse(null);
        if (update == null) 
            throw new Exception("ID not found");
        update.setName(student.getName());
        update.setEmail(student.getEmail());
        update.setBranch(student.getBranch());
        update.setState(student.getState());
        update.setCountry(student.getCountry());
        update.setImg(img.getBytes());
        return studentRepo.save(update);
    }

    public HashMap<String, Long> countAll() {
        HashMap<String, Long> count = new HashMap<>();
        count.put("students", studentRepo.count());
        count.put("teachers", 35L);
        count.put("cse", studentRepo.countByBranch("cse"));
        count.put("ece", studentRepo.countByBranch("ece"));
        return count;
    }

}
