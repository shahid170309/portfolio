package com.shahid.portfolio.controller;

import com.shahid.portfolio.entity.Experience;
import com.shahid.portfolio.service.ExperienceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/experience")
@CrossOrigin(origins = "*")
public class ExperienceController {

    private final ExperienceService experienceService;

    public ExperienceController(ExperienceService experienceService) {
        this.experienceService = experienceService;
    }

    @GetMapping
    public List<Experience> getAllExperiences() {
        return experienceService.getAllExperiences();
    }
}