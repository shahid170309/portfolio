package com.shahid.portfolio.repository;

import com.shahid.portfolio.entity.Architecture;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArchitectureRepository
        extends JpaRepository<Architecture, Long> {
}