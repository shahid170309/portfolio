package com.shahid.portfolio.controller;

import com.shahid.portfolio.entity.Education;
import com.shahid.portfolio.repository.EducationRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/education")
@CrossOrigin(origins = "*")
public class EducationController {

    private final EducationRepository educationRepository;

    public EducationController(EducationRepository educationRepository) {
        this.educationRepository = educationRepository;
    }

    @GetMapping
    public List<Education> getAllEducation() {
        return educationRepository.findAll();
    }
}