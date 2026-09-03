package com.shahid.portfolio.controller;

import com.shahid.portfolio.entity.Architecture;
import com.shahid.portfolio.repository.ArchitectureRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/architecture")
@CrossOrigin(origins = "*")
public class ArchitectureController {

    private final ArchitectureRepository architectureRepository;

    public ArchitectureController(
            ArchitectureRepository architectureRepository) {
        this.architectureRepository = architectureRepository;
    }

    @GetMapping
    public List<Architecture> getAllArchitecture() {
        return architectureRepository.findAll();
    }
}