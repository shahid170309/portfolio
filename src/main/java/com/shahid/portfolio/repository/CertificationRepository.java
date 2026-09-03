package com.shahid.portfolio.repository;

import com.shahid.portfolio.entity.Certification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CertificationRepository
        extends JpaRepository<Certification, Long> {
}