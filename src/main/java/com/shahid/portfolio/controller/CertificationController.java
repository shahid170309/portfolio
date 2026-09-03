package com.shahid.portfolio.controller;

import com.shahid.portfolio.entity.Certification;
import com.shahid.portfolio.repository.CertificationRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/certifications")
@CrossOrigin(origins = "*")
public class CertificationController {

    private final CertificationRepository certificationRepository;

    public CertificationController(
            CertificationRepository certificationRepository) {
        this.certificationRepository = certificationRepository;
    }

    @GetMapping
    public List<Certification> getAllCertifications() {
        return certificationRepository.findAll();
    }
}