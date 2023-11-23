package ma.emsi.server.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;
import java.util.Collection;
import java.util.UUID;

/**
 * @author BarkouchMourad
 **/
@Data
@AllArgsConstructor
@Entity
public class Offres {
    @Id
    private String id;
    private String nom;
    private String description;
    @OneToMany
    private Collection<Postulations> postulationsCollection;

    public Offres() {
        this.id = UUID.randomUUID().toString();
        this.nom = "---";
        this.description = "---";
        this.postulationsCollection = new ArrayList<>();
    }
}
