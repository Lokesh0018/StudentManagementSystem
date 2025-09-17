package com.studentdetails.studentapi.Controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.studentdetails.studentapi.Entity.Student;
import com.studentdetails.studentapi.Service.StudentService;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;





@RestController
@RequestMapping("/stu")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/all")
    public ResponseEntity<List<Student>> getAll() {
        return new ResponseEntity<>(studentService.getAll(),HttpStatus.OK);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Student> getById(@PathVariable int id) {
        Student student = studentService.getById(id);
        if(student==null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(student, HttpStatus.OK);
    }

    @GetMapping("/{name}")
    public ResponseEntity<Student> getByName(@RequestParam String name) {
        Student student = studentService.getByName(name);
        if(student==null)
            return new ResponseEntity<>(student,HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(student,HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Student> addStudent(@RequestPart Student student,@RequestPart MultipartFile img) {
        try {
            Student s = studentService.addStudent(student,img);
            return new ResponseEntity<>(s,HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Student> delStudent (@PathVariable int id) { //@PathParam("id") int id
        Student delete = studentService.delStudent(id);
        if(delete==null)
            return new ResponseEntity<>(delete,HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(delete,HttpStatus.OK);
    }
    
    @PutMapping("update/{id}")
    public ResponseEntity<Student> updateStudent (@PathVariable int id){
        Student update = studentService.updateStudent(id);
        if(update==null)
            return new ResponseEntity<>(update,HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(update,HttpStatus.OK);
    }
}
