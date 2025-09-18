package com.studentdetails.studentapi.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.studentdetails.studentapi.Entity.Student;
import com.studentdetails.studentapi.Service.StudentService;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    
    @GetMapping("/id/{id}")
    public ResponseEntity<?> getById(@PathVariable int id) {
        Student student = studentService.getById(id);
        if(student==null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(student, HttpStatus.OK);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<?> getByName(@PathVariable String name) {
        Student student = studentService.getByName(name);
        if(student==null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(student,HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<?> addStudent(@RequestPart("studentData") Student student,@RequestPart("img") MultipartFile img) {
        try {
            Student s = studentService.addStudent(student,img);
            return new ResponseEntity<>(s,HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delStudent (@PathVariable int id) { //@PathParam("id") int id
        Student delete = studentService.delStudent(id);
        if(delete==null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(delete,HttpStatus.OK);
    }
    
    @GetMapping("/update/{id}")
    public ResponseEntity<?> findUpdate (@PathVariable int id){
        Student update = studentService.findUpdate(id);
        if(update==null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(update,HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateStudent (@RequestPart("studentData") Student student,@RequestPart("img") MultipartFile img) {
        try{    
            Student update = studentService.updateStudent(student,img);
            return new ResponseEntity<>(update,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}
